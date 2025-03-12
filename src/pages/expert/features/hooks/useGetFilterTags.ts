import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

export const useGetFilterTags = () => {
  const { price, region, themes } = useFilterStore();

  const filterTags: { category: string; value: string; isApplied: boolean }[] = [];

  if (price) {
    filterTags.push({
      category: '가격',
      value: typeof price === 'string' ? price : `₩${price.min} ~ ₩${price.max}`,
      isApplied: true,
    });
  } else {
    filterTags.push({ category: '가격', value: '가격', isApplied: false });
  }

  if (region.city) {
    filterTags.push({
      category: '지역',
      value: region.district ? `${region.city} ${region.district}` : region.city,
      isApplied: true,
    });
  } else {
    filterTags.push({ category: '지역', value: '지역', isApplied: false });
  }

  if (themes.length > 1) {
    filterTags.push({ category: '테마', value: `테마 ${themes.length}개`, isApplied: true });
  } else if (themes.length === 1) {
    filterTags.push({ category: '테마', value: themes[0], isApplied: true });
  } else {
    filterTags.push({ category: '테마', value: '테마', isApplied: false });
  }

  return filterTags;
};
