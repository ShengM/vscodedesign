import { Button } from 'base/browser/ui/button/button';

let btn = new Button(document.body);
btn.label = 'click me';
btn.onDidClick(function () {
  console.log('btn clicked');
});