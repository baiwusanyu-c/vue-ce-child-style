# this is a test project for vue pr #7942(https://github.com/vuejs/core/pull/7942)
1. download the repo and run `pnpm install`  at root
2. run `dev`
3. When `dev` finishes executing and open the address `localhost:5173`, you will find that there is a problem with the page, just as you described. Close the `dev` process at this time
4. At this time, there will be a vue.js file under the path `\vue-ce-child-style\node_modules\.vite\deps\vue.js` (vite will request it to the browser during development )and then put the code of my pr build (`packages/vue/dist/vue.esm-browser .js`) to override it
[vue.esm-browser.txt](https://github.com/vuejs/core/files/11419326/vue.esm-browser.txt)

![image](https://user-images.githubusercontent.com/32354856/236774019-5161807d-25a7-4f2b-a449-795b20287d43.png)
![image](https://user-images.githubusercontent.com/32354856/236774125-0a8acd0a-af70-46bd-97dd-dd86ecd3c371.png)

5. run  `dev` (ps: refresh browser page and clear cache)
![image](https://user-images.githubusercontent.com/32354856/236776736-6ba0889d-b24f-4f91-a3ef-4d5ae32354d3.png)
