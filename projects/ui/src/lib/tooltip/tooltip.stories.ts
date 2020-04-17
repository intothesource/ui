import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { TooltipModule } from './tooltip.module';

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [TooltipModule],
    })
  )
  .add('Default container', () => ({
    template: `
      <its-tooltip>Tooltip</its-tooltip>
    `,
  }))
