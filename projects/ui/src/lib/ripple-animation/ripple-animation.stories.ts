import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { RippleAnimationModule } from './ripple-animation.module';

storiesOf('Ripple Animation', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [RippleAnimationModule],
    })
  )
  .add('Default container', () => ({
    template:`
    <its-ripple-animation></its-ripple-animation>
    `
  }))
