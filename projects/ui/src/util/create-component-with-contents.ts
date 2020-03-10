import { ComponentFactory, Injector } from '@angular/core';

/***
 * @see {@link https://stackoverflow.com/a/45998053}
 */
export function createComponentWithContents<T>(factory: ComponentFactory<T>, ...contents: string[]) {
  const template = document.createElement('template');
  const projectableNodes = contents.map(html => {
    template.innerHTML = html;
    return [Array.from(template.content.childNodes)];
  });
  return factory.create(Injector.NULL, projectableNodes);
}
