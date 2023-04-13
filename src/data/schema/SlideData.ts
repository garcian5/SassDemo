export class SlideData {
  title: string = 'New Title';
  body: string | HTMLElement = '<p>New Body</p>';
  imgs: string[] = [];

  constructor(slide?: Partial<SlideData>) {
    Object.assign(this, slide);
  }
}