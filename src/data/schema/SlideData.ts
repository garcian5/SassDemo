export interface IBodyList {
  parent: string;
  children: string[];
}
export interface ILinks {
  linkName: string;
  href: string;
}

export class SlideData {
  title: string = 'New Title';
  subTitle: string | null = null;
  bodyHTML: string = '<p>New Body</p>';
  imgs: string[] = [];

  bodyIsHTML: boolean = true;

  bodyText: string | null = null;
  bodyList: IBodyList[] = [];

  links: ILinks[] = [];
  smallText: string | null = null;

  showSwitchFilter: boolean = false;
  showColumnDemo: boolean = false;
  smallerImgs: boolean = false;

  constructor(slide?: Partial<SlideData>) {
    Object.assign(this, slide);
  }
}