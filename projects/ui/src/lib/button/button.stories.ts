import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
    })
  )
  .add('<its-button>', () => ({
    template: `
      <its-button>hello</its-button>
    `,
  }))
  .add('<button its-button>', () => ({
    template: `
      <button its-button>hello</button>
    `,
  }))
  .add('<a its-button>', () => ({
    template: `
      <a its-button>hello</a>
    `,
  }))
