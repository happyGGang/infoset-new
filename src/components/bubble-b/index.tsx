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

const BubbleB: React.FC<BubbleAProps> = ({ data }) => {
  const { selectedBubbleItems, toggleSelectedBubbleItem } = useBubbleAStore();

  useEffect(() => {
    const width = remToPx(17.20056);
    const height = remToPx(13.6745);

    const simulation = d3
      .forceSimulation<BubbleData>(data)
      .force('x', d3.forceX(width / 2.2).strength(0.05))
      .force('y', d3.forceY(height / 2.2).strength(0.05))
      .force(
        'collision',
        d3.forceCollide((d) => remToPx(d.value / 1.5))
      )
      .on('tick', ticked);

    const drag = d3.drag().on('drag', function (event, d: any) {
      d.x = event.x;
      d.y = event.y;
      d3.select(this).style('left', `${d.x}px`).style('top', `${d.y}px`);
      simulation.alphaTarget(0.3).restart();
    });

    function ticked() {
      const container = d3.select('#bubble-container');

      const bubbles = container.selectAll('.bubble').data(data);

      bubbles
        .enter()
        .append('div')
        .attr('class', 'bubble')
        .style('position', 'absolute')
        .style('cursor', 'pointer')
        .style('display', 'flex')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .style('border-radius', '50%')
        .style('width', (d) => `${d.value}rem`)
        .style('height', (d) => `${d.value}rem`)
        .style('color', '#fff')
        .style('font-size', '0.6rem')
        .style('white-space', 'nowrap')
        .style('text-align', 'center')
        .style('background', (d) =>
          selectedBubbleItems.includes(d.id) ? `#1773EB` : d.color
        )
        .merge(bubbles as any)
        .style('left', (d) => `${(d.x || 0) / remToPx(1)}rem`)
        .style('top', (d) => `${(d.y || 0) / remToPx(1)}rem`)
        .text((d) => d.id)
        .on('click', (e, d) => {
          e.stopPropagation();
          toggleSelectedBubbleItem(d.id);
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
        width: '19.17881rem',
        height: '16.05794rem',
      }}
    ></div>
  );
};

export default BubbleB;
