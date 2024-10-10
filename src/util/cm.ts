// 클래스 네임을 합쳐주는 util 함수

export const cm = (inline?: string, className?: string): string => {
  let mergedClassName = inline + " " + className;
  return mergedClassName;
};
