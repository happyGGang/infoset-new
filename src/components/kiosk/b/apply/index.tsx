import React, { useState } from 'react';
import {
  Container,
  Form,
  Title,
  Row,
  Column,
  Label,
  Input,
  ApplyButton,
  Gender,
  CustomSelect,
  PhoneInput,
  CustomRadioLabel,
  HiddenRadio,
  Caption,
  ApplyButtonX,
  CaptionX,
  ColumnX,
  ContainerX,
  CustomRadioLabelX,
  CustomSelectX,
  FormX,
  GenderX,
  HiddenRadioX,
  InputX,
  LabelX,
  PhoneInputX,
  RowX,
  Scroll,
  TitleX,
} from './index.styled';
import {
  generateDays,
  generateMonths,
  generateYears,
} from '../../../../util/birth';
import { useOrientationStore } from '../../../../store/landscape-mode.store';

const ApplyB = () => {
  const [gender, setGender] = useState('m');
  const [smsConsent, setSmsConsent] = useState('yes');
  const [photoConsent, setPhotoConsent] = useState('yes');
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <FormX>
            <TitleX>신청자정보</TitleX>
            <Scroll>
              <RowX>
                <ColumnX style={{ marginRight: '1.17rem' }}>
                  <LabelX>성명</LabelX>
                  <InputX placeholder={'성명을 입력해주세요'} />
                </ColumnX>
                <ColumnX>
                  <LabelX>성별</LabelX>
                  <RowX>
                    <GenderX
                      active={gender === 'm'}
                      onClick={() => setGender('m')}
                    >
                      남
                    </GenderX>
                    <GenderX
                      active={gender === 'w'}
                      onClick={() => setGender('w')}
                    >
                      여
                    </GenderX>
                  </RowX>
                </ColumnX>
              </RowX>

              <RowX>
                <ColumnX>
                  <LabelX>생년월일</LabelX>
                  <RowX>
                    <div className={'select_wrapper'}>
                      <CustomSelectX>
                        {generateYears().map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </CustomSelectX>
                    </div>
                    <div className={'select_wrapper'}>
                      <CustomSelectX>
                        {generateMonths().map((month) => (
                          <option key={month} value={month}>
                            {month < 10 ? `0${month}` : month}
                          </option>
                        ))}
                      </CustomSelectX>
                    </div>
                    <div className={'select_wrapper'}>
                      <CustomSelectX>
                        {generateDays().map((day) => (
                          <option key={day} value={day}>
                            {day < 10 ? `0${day}` : day}
                          </option>
                        ))}
                      </CustomSelectX>
                    </div>
                  </RowX>
                </ColumnX>
                <ColumnX style={{ marginLeft: '1.17rem' }}>
                  <LabelX>휴대전화번호</LabelX>
                  <RowX>
                    <div className={'select_wrapper'}>
                      <PhoneInputX placeholder={'010'} />
                    </div>
                    <div className={'select_wrapper'}>
                      <PhoneInputX placeholder={'0000'} />
                    </div>
                    <div className={'select_wrapper'}>
                      <PhoneInputX placeholder={'0000'} />
                    </div>
                  </RowX>
                </ColumnX>
              </RowX>

              <ColumnX>
                <RowX>
                  <LabelX>SMS 수신 동의 여부</LabelX>
                  <RowX>
                    <HiddenRadioX
                      id="sms-yes"
                      name="smsConsent"
                      type="radio"
                      checked={smsConsent === 'yes'}
                      onChange={() => setSmsConsent('yes')}
                    />
                    <CustomRadioLabelX
                      htmlFor="sms-yes"
                      checked={smsConsent === 'yes'}
                    >
                      동의
                    </CustomRadioLabelX>

                    <HiddenRadioX
                      id="sms-no"
                      name="smsConsent"
                      type="radio"
                      checked={smsConsent === 'no'}
                      onChange={() => setSmsConsent('no')}
                    />
                    <CustomRadioLabelX
                      htmlFor="sms-no"
                      checked={smsConsent === 'no'}
                    >
                      미동의
                    </CustomRadioLabelX>
                  </RowX>
                </RowX>
                <CaptionX>
                  ㆍ활용목적 : 도서관 강좌 및 각종행사 안내
                  <br />
                  ㆍ미동의 하여도 수강신청에 제한이 없음
                </CaptionX>
              </ColumnX>
              <ColumnX>
                <RowX>
                  <LabelX>사진 촬영 동의 여부</LabelX>
                  <RowX>
                    <HiddenRadioX
                      id="photo-yes"
                      name="photoConsent"
                      type="radio"
                      checked={photoConsent === 'yes'}
                      onChange={() => setPhotoConsent('yes')}
                    />
                    <CustomRadioLabelX
                      htmlFor="photo-yes"
                      checked={photoConsent === 'yes'}
                    >
                      동의
                    </CustomRadioLabelX>

                    <HiddenRadioX
                      id="photo-no"
                      name="photoConsent"
                      type="radio"
                      checked={photoConsent === 'no'}
                      onChange={() => setPhotoConsent('no')}
                    />
                    <CustomRadioLabelX
                      htmlFor="photo-no"
                      checked={photoConsent === 'no'}
                    >
                      미동의
                    </CustomRadioLabelX>
                  </RowX>
                </RowX>
                <CaptionX>
                  ㆍ활용목적 : 도서관 프로그램 홍보
                  <br /> ㆍ프로그램 진행 시간 동안 참여자 대상 사진 및 사진
                  촬영, 인터뷰 요청 등<br />ㆍ 모든 촬영은 프로그램 진행이나
                  활동에 전혀 영향을 주지 않는 선에서 진행
                </CaptionX>
              </ColumnX>
              <ColumnX>
                <LabelX>비밀번호</LabelX>
                <InputX placeholder={'비밀번호를 입력하세요'} />
              </ColumnX>
            </Scroll>
          </FormX>
          <ApplyButtonX>확인</ApplyButtonX>
        </ContainerX>
      ) : (
        <Container>
          <Form>
            <Title>신청자정보</Title>
            <Column>
              <Label>성명</Label>
              <Input placeholder={'성명을 입력해주세요'} />
            </Column>
            <Column>
              <Label>성별</Label>
              <Row>
                <Gender active={gender === 'm'} onClick={() => setGender('m')}>
                  남
                </Gender>
                <Gender active={gender === 'w'} onClick={() => setGender('w')}>
                  여
                </Gender>
              </Row>
            </Column>
            <Column>
              <Label>생년월일</Label>
              <Row>
                <div className={'select_wrapper'}>
                  <CustomSelect>
                    {generateYears().map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
                <div className={'select_wrapper'}>
                  <CustomSelect>
                    {generateMonths().map((month) => (
                      <option key={month} value={month}>
                        {month < 10 ? `0${month}` : month}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
                <div className={'select_wrapper'}>
                  <CustomSelect>
                    {generateDays().map((day) => (
                      <option key={day} value={day}>
                        {day < 10 ? `0${day}` : day}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
              </Row>
            </Column>
            <Column>
              <Label>휴대전화번호</Label>
              <Row>
                <div className={'select_wrapper'}>
                  <PhoneInput placeholder={'010'} />
                </div>
                <div className={'select_wrapper'}>
                  <PhoneInput placeholder={'0000'} />
                </div>
                <div className={'select_wrapper'}>
                  <PhoneInput placeholder={'0000'} />
                </div>
              </Row>
            </Column>
            <Column>
              <Row>
                <Label>SMS 수신 동의 여부</Label>
                <Row>
                  <HiddenRadio
                    id="sms-yes"
                    name="smsConsent"
                    type="radio"
                    checked={smsConsent === 'yes'}
                    onChange={() => setSmsConsent('yes')}
                  />
                  <CustomRadioLabel
                    htmlFor="sms-yes"
                    checked={smsConsent === 'yes'}
                  >
                    동의
                  </CustomRadioLabel>

                  <HiddenRadio
                    id="sms-no"
                    name="smsConsent"
                    type="radio"
                    checked={smsConsent === 'no'}
                    onChange={() => setSmsConsent('no')}
                  />
                  <CustomRadioLabel
                    htmlFor="sms-no"
                    checked={smsConsent === 'no'}
                  >
                    미동의
                  </CustomRadioLabel>
                </Row>
              </Row>
              <Caption>
                ㆍ활용목적 : 도서관 강좌 및 각종행사 안내
                <br />
                ㆍ미동의 하여도 수강신청에 제한이 없음
              </Caption>
            </Column>
            <Column>
              <Row>
                <Label>사진 촬영 동의 여부</Label>
                <Row>
                  <HiddenRadio
                    id="photo-yes"
                    name="photoConsent"
                    type="radio"
                    checked={photoConsent === 'yes'}
                    onChange={() => setPhotoConsent('yes')}
                  />
                  <CustomRadioLabel
                    htmlFor="photo-yes"
                    checked={photoConsent === 'yes'}
                  >
                    동의
                  </CustomRadioLabel>

                  <HiddenRadio
                    id="photo-no"
                    name="photoConsent"
                    type="radio"
                    checked={photoConsent === 'no'}
                    onChange={() => setPhotoConsent('no')}
                  />
                  <CustomRadioLabel
                    htmlFor="photo-no"
                    checked={photoConsent === 'no'}
                  >
                    미동의
                  </CustomRadioLabel>
                </Row>
              </Row>
              <Caption>
                ㆍ활용목적 : 도서관 프로그램 홍보
                <br /> ㆍ프로그램 진행 시간 동안 참여자 대상 사진 및 사진 촬영,
                인터뷰 요청 등<br />ㆍ 모든 촬영은 프로그램 진행이나 활동에 전혀
                영향을 주지 않는 선에서 진행
              </Caption>
            </Column>
            <Column>
              <Label>비밀번호</Label>
              <Input placeholder={'비밀번호를 입력하세요'} />
            </Column>
          </Form>
          <ApplyButton>확인</ApplyButton>
        </Container>
      )}
    </>
  );
};

export default ApplyB;
