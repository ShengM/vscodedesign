import { ListView } from 'base/browser/ui/list/listView';
import { IListVirtualDelegate, IListRenderer } from 'base/browser/ui/list/list';
import { range } from 'base/common/arrays';

const element = document.createElement('div');
element.style.height = '200px';
element.style.width = '200px';

const delegate: IListVirtualDelegate<number> = {
  getHeight() { return 20; },
  getTemplateId() { return 'template'; }
};

let templatesCount = 0;

const renderer: IListRenderer<number, void> = {
  templateId: 'template',
  renderTemplate() { templatesCount++; },
  renderElement() { },
  disposeTemplate() { templatesCount--; }
};

const listView = new ListView<number>(element, delegate, [renderer]);
listView.layout(200);

listView.splice(0, 0, range(100));
document.body.append(element);
