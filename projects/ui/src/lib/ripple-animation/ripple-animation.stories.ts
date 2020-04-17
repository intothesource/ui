import { storiesOf, moduleMetadata, addDecorator } from '@storybook/angular';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import { RippleAnimationModule } from './ripple-animation.module';

storiesOf('components|Ripple', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [RippleAnimationModule],
    })
  )
  .add('Default container', () => ({
    template: `
    <div style="display: flex; flex-direction: column;">
    <p its-ripple-animation [color]="color">This is a p tag</p>
    <div style="width: 200px; height: 100px" its-ripple-animation [color]="color">This is a div</div>
    <button its-ripple-animation [color]="color">This is a button</button>
    <a its-ripple-animation [color]="color">This is a link tag</a>
    <its-ripple-animation [color]="color">Using the component selector</its-ripple-animation>
    </div>`,
    props: {
      color: text(
        'Color',
        '#607D8B'
      ),
    }
  }))
