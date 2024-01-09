# Vibe Design System (modified for FC Apps)

From [monday.com](https://www.monday.com) React components library - [Modified Storybook](https://custom-palette--comforting-choux-f281fd.netlify.app/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 4 versions                                                                                                                                                                                                   | last 4 versions                                                                                                                                                                                               | 14+                                                                                                                                                                                                           | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## Installation Component

Install the component library

```
npm install monday-ui-react-core
```

## Installation Styles package

Install the styling library by adding a dependency in your `package.json` file and then running `npm install`

```json
"dependencies": {
  "@mondaydotcomorg/monday-ui-style": "git+https://github.com/RoseAmS/monday-ui-style.git",
}
```

## Usage

Components are imported from the library's root entry:

```javascript
import { Button } from "monday-ui-react-core";
```

In order to load all the relevant CSS, you should import the `tokens` and `index.min.css` file at the root of your application file

```javascript
import "monday-ui-react-core/tokens";
import "@mondaydotcomorg/monday-ui-style/dist/index.min.css";
```

### Font installation

We don't import fonts ourselves, we work best with the following font -
Nunito Sans, we recommend adding the following `link` import to your application

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,700;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,700&display=swap"
  rel="stylesheet"
/>
```

### Peer dependencies

We are reliant on React and React DOM, we are using them as externals, and we don't package them to the package, so you must have them in your project

# Components documentation best practices

This guide provides essential best practices for documenting components using Storybook.
This doc is still work in progress and will constantly be updated.

1. Always use live component instances instead of displaying Vibe's components as pictures. Pictures will not be updated according to design changes, theme changes, and bug fixes.
2. Examples should be minimal and simple to use, without unnecessary props that don't serve the purpose of demonstrating the use case. For example, demonstrating a single variation prop for the button component size:

```js
<Canvas>
  <Story name="Sizes">
    <Button size={Button.sizes.LARGE}>Large</Button>
    <Button size={Button.sizes.MEDIUM}>Medium</Button>
    <Button size={Button.sizes.SMALL}>Small</Button>
  </Story>
</Canvas>
```

3. Use the `<Story/>` layout component to layout the example and its title and avoid adding titles in the story itself in order to maintain a clear and simple story code. For example, instead of writing this:

````diff
- <Canvas>
-   <Story name="Sizes">
-       <Flex direction={Flex.directions.ROW} gap={Flex.gaps.SMALL}>
-           <StoryDescription description="Large" vertical align={Flex.align.START}>
-               <Button size={Button.sizes.LARGE}>Large</Button>
-           </StoryDescription>
-           <StoryDescription description="Medium" vertical align={Flex.align.START}>
-               <Button size={Button.sizes.MEDIUM}>Medium</Button>
-           </StoryDescription>
-           <StoryDescription description="Small" vertical align={Flex.align.START}>
-               <Button size={Button.sizes.SMALL}>Small</Button>
-           </StoryDescription>
-       </Flex>
-   </Story>
- </Canvas>
Do this:
```diff
+ <Canvas>
+     <Story name="Sizes">
+         <Button size={Button.sizes.LARGE}>Large</Button>
+         <Button size={Button.sizes.MEDIUM}>Medium</Button>
+         <Button size={Button.sizes.SMALL}>Small</Button>
+     </Story>
+ </Canvas>

4. The default `<Story/>` layout provides a solution for both a single component example and multiple components example. In case of multiple components example where the `<Story/>` layout is insufficient, you may use **only** Vibe's `<Flex/>` layout component. Any other custom layout solution is forbidden.
```js
<Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>
  <Steps type={Steps.types.NUMBERS} steps={steps} activeStepIndex={2} />
  <Steps type={Steps.types.GALLERY} steps={steps} activeStepIndex={2} />
</Flex>
````

4. If you need to add titles to the component states displayed in a story, please use the `<StoryDescription/>` component, as shown in the code example below:

```js
<Flex direction={Flex.directions.ROW}>
  <StoryDescription description="Xs">
    <Loader size={Loader.sizes.XS} />
  </StoryDescription>
  <StoryDescription description="Small">
    <Loader size={Loader.sizes.SMALL} />
  </StoryDescription>
</Flex>
```

6. If custom styles are needed for some demonstration, use **inline styles only**. Inline styles make the styles visible within the story, without the need for external CSS files or class definitions.

```js
<Canvas>
  <Story name="Stretched">
    <div style={{ width: "100%" }}>
      <TabList tabType="stretched">
        <Tab>First</Tab>
        <Tab>Second</Tab>
      </TabList>
    </div>
  </Story>
</Canvas>
```

7. Avoid documenting wrapped components that are not exported to external users, as they are not available, and create an un-copyable example. If such cases, code duplication **is acceptable**.

Instead of writing this:

```js
<Canvas>
  <Story name="Default">
    <Tipseen content={<TipsenStoryookContentExample />}>
      <TipsenStoryookContainerExample />
    </Tipseen>
  </Story>
</Canvas>
```

Do this:

```js
<Canvas>
  <Story name="Default">
    <Tipseen
      content={
        <TipseenContent title="This is a title">
          Popover message will appear here loremipsum dolor samet…
        </TipseenContent>
      }
    >
      <div />
    </Tipseen>
  </Story>
</Canvas>
```

8. The storybook generated code should be easily "copy-paste"-able for seamless integration. Avoid adding internal additions that require additional modifications for successful copy-pasting.
9. As a general rule of thumb - Never apply custom styles in a story example to make a component look good. If you need to do it, it probably means there's an issue with the component itself.

# For Vite.js users

Add the following

```js
// vite.config.ts or vite.config.js
export default {
  define: {
    global: {}
  }
};
```

## Storybook

We are using storybook in order to develop the components independently of any consumer.
run this to build & run the storybook locally:

```bash
npm run storybook
```

the storybook will be served on `http://localhost:7007`

## Developing locally with your consumer application

When developing locally, we are using a npm functionality called npm link, this allows us to
work locally on our package and use it in a different project without publishing.
This functionality basically overrides the npm mapping between package name to its repo, and points it to where the package is located locally.

### Troubleshooting local development

- If you are using NVM, make sure both packages are using the same version.
- Because we are using react hooks and having react as a peerDependency - if you want to develop locally and encounter issues with "invalid hook call" [see this github thread](https://github.com/facebook/react/issues/13991). The quick fix is in your webpack config file alias react to resolve the node_modules path

Go to the project's directory and run:

```zsh
nvm use
npm unlink
npm link
npm start
```

## Contributing

We welcome every contributor, please read the [contribution guidelines](CONTRIBUTING.md) before submitting a PR

## Themes

We support theming from the library to the component level using css variables - for more info on theming please read the [theme guidelines](THEME_README.md) file
