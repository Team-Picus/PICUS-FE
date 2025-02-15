import { FontsTypes } from '@shared/types';

const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}px;
  letter-spacing: 0%;
`;

export const fonts: FontsTypes = {
  headline_24px_semibold: createFontStyle('Pretendard', 600, 24, 28),
  headline_22px_bold: createFontStyle('Pretendard', 700, 22, 24),
  headline_18px_semibold: createFontStyle('Pretendard', 600, 18, 24),
  subtitle_16px_semibold: createFontStyle('Pretendard', 600, 16, 24),
  subtitle_14px_semibold: createFontStyle('Pretendard', 600, 14, 20),
  body_14px_medium: createFontStyle('Pretendard', 500, 14, 20),
  body_14px_semibold: createFontStyle('Pretendard', 600, 14, 20),
  caption_12px_medium: createFontStyle('Pretendard', 500, 12, 16),
  caption_10px_medium: createFontStyle('Pretendard', 500, 10, 14),
  button_14px_semibold: createFontStyle('Pretendard', 600, 14, 20),
};
