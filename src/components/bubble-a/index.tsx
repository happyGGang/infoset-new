import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useBubbleAStore } from '../../store/bubble-a.store';

interface BubbleData {
  id: string;
  value: number;
  color: string;
  x?: number;
  y?: number;
}

interface BubbleAProps {
  data: BubbleData[];
}

const remToPx = (rem: number): number =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

const BubbleA: React.FC<BubbleAProps> = ({ data }) => {
  const { selectedBubbleItems, toggleSelectedBubbleItem } = useBubbleAStore();

  useEffect(() => {
    const width = remToPx(17.20056);
    const height = remToPx(13.6745);

    const simulation = d3
      .forceSimulation<BubbleData>(data)
      .force('x', d3.forceX(width / 2).strength(0.05))
      .force('y', d3.forceY(height / 2).strength(0.05))
      .force(
        'collision',
        d3.forceCollide((d) => d.value + remToPx(1.5))
      )
      .on('tick', ticked);

    const drag = d3.drag().on('drag', function (event, d: any) {
      d.x = event.x;
      d.y = event.y;
      d3.select(this)
        .style('left', `${d.x}px`)
        .style('top', `${d.y + 4}px`);
      simulation.alphaTarget(0.3).restart();
    });

    function ticked() {
      const container = d3.select('#bubble-container');

      const bubbles = container.selectAll('div').data(data);

      bubbles
        .enter()
        .append('div')
        .attr('class', 'bubble')
        .style('position', 'absolute')
        .style('cursor', 'pointer')
        .style('font-size', (d) => `${d.value}rem`)
        .style('color', (d) => d.color)
        .merge(bubbles as any)
        .style('left', (d) => `${(d.x || 0) / remToPx(1)}rem`)
        .style('top', (d) => `${(d.y || 0) / remToPx(1)}rem`)
        .text((d) => d.id)
        .style('white-space', 'nowrap')
        .style('border', (d) =>
          selectedBubbleItems.includes(d.id) ? `1px solid ${d.color}` : 'none'
        )
        .on('click', (e, d) => {
          e.stopPropagation();
          toggleSelectedBubbleItem(d.id); // Update state via zustand
        })
        .call(drag as any);

      bubbles.exit().remove();
    }

    return () => {
      simulation.stop();
    };
  }, [data, selectedBubbleItems, toggleSelectedBubbleItem]);

  return (
    <div
      id="bubble-container"
      style={{
        position: 'relative',
        width: '17.20056rem',
        height: '13.6745rem',
      }}
    ></div>
  );
};

export default BubbleA;
