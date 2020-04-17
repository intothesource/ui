import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { DragDropModule } from './drag-drop.module';

storiesOf('Drag Drop', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [DragDropModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-drag-drop>Drag Drop</its-drag-drop>
    `,
  }))
