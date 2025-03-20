import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

export const useGetFilterTags = () => {
  const { price, region, themes, isOutdoor } = useFilterStore();

  // 태그 객체 생성
  const createTag = (category: string, value: string, isApplied: boolean) => ({
    category,
    value,
    isApplied,
  });

  const filterTags: { category: string; value: string; isApplied: boolean }[] = [];

  // 가격 태그
  if (price) {
    const priceValue = typeof price === 'string' ? price : `₩${price.min} ~ ₩${price.max}`;
    filterTags.push(createTag('가격', priceValue, true));
  } else {
    filterTags.push(createTag('가격', '가격', false));
  }

  // 촬영 방식 태그 (isOutdoor 여부)
  if (isOutdoor === true || isOutdoor === false) {
    filterTags.push(createTag('촬영', isOutdoor ? '외부 촬영' : '개인 스튜디오', true));
  } else {
    filterTags.push(createTag('촬영', '촬영', false));
  }

  // 지역 태그
  if (region.city) {
    const regionValue = region.district ? `${region.city} ${region.district}` : region.city;
    filterTags.push(createTag('지역', regionValue, true));
  } else {
    filterTags.push(createTag('지역', '지역', false));
  }

  // 테마 태그
  if (themes.length > 1) {
    filterTags.push(createTag('테마', `테마 ${themes.length}개`, true));
  } else if (themes.length === 1) {
    filterTags.push(createTag('테마', themes[0], true));
  } else {
    filterTags.push(createTag('테마', '테마', false));
  }

  return filterTags;
};