import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { VisuallyHiddenModule } from './visually-hidden.module';

storiesOf('utilities|a11y.VisuallyHidden', module)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [VisuallyHiddenModule],
    })
  )
  .add('<its-visually-hidden/>', () => ({
    template: `
      <p>
        Visually hidden helper provides a component that helps to hide elements
        in a way that is a11y friendly.
      </p>
      <p>
        The element does not take up any space but it can still be visible to
        screen readers that rely on the actual operation of a certain HTML
        element, such as checkboxes and radio elements.
      </p>
      <p>
        The element below should not be visible. If you do see it, then
        something is broken.
      </p>
      <its-visually-hidden>
        You should not see this text.
      </its-visually-hidden>
    `,
  }))
  .add('[itsVisuallyHidden]', () => ({
    template: `
      <p>
        Visually hidden helper provides a directive that helps to hide elements
        in a way that is a11y friendly.
      </p>
      <p>
        The element does not take up any space but it can still be visible to
        screen readers that rely on the actual operation of a certain HTML
        element, such as checkboxes and radio elements.
      </p>
      <table class="table" cellpadding=10>
        <thead>
          <tr>
            <th align=right>Element</th>
            <th align=left>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th align="right" valign="top">Checkbox</th>
            <td>
              <label>
                <input type="checkbox" itsVisuallyHidden>
                You should not see the checkbox.
              </label>
            </td>
          </tr>
          <tr>
            <th align="right" valign="top">Radio Button</th>
            <td>
              <label>
                <input type="radio" name="r1" itsVisuallyHidden>
                You should
              </label>
              <label>
                <input type="radio" name="r1" itsVisuallyHidden>
                not see
              </label>
              <label>
                <input type="radio" name="r1" itsVisuallyHidden>
                the radio button.
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    `,
  }))
