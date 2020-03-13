import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';

storiesOf('Toggle', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ToggleComponent],
    })
  )
  .add('foo', () => ({
    props: {
      foo: false,
    },
    template: `
      <its-toggle [(ngModel)]="foo"></its-toggle>
      <pre><code>foo: {{ foo | json }}</code></pre>
    `,
  }))
