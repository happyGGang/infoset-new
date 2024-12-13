const formatNumber = (num: number): string => num.toString().padStart(2, '0');

const getDayName = (dayIndex: number, short = false): string => {
  const dayNames = short
    ? ['일', '월', '화', '수', '목', '금', '토']
    : ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return dayNames[dayIndex];
};

export const getCurrentTime = (): string => {
  const now = new Date();
  const hours = formatNumber(now.getHours());
  const minutes = formatNumber(now.getMinutes());

  return `${hours}:${minutes}`;
};

export const getCurrentDate = (): string => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const dayName = getDayName(now.getDay());

  return `${month}월 ${date}일 ${dayName}`;
};

export const getDetailedCurrentDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = formatNumber(now.getMonth() + 1);
  const date = formatNumber(now.getDate());
  const dayName = getDayName(now.getDay(), true);

  return `${year}년 ${month}월 ${date}일(${dayName})`;
};

export const getFullCurrentDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = formatNumber(now.getMonth() + 1);
  const date = formatNumber(now.getDate());
  const dayName = getDayName(now.getDay(), true);

  return `${year}. ${month}. ${date}. ${dayName}요일`;
};

export const getSimpleCurrentDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = formatNumber(now.getMonth() + 1);
  const date = formatNumber(now.getDate());
  const dayName = getDayName(now.getDay(), true);

  return `${year}. ${month}. ${date}. ${dayName}`;
};
