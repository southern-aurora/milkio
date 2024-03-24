<script setup>
import { onMounted, ref, nextTick } from "vue";
import DefaultTheme from "vitepress/theme";
import { improveUrl, defaultLanguage, allLanguages, language, enableI18NForThisPage } from "./state.js";

const { Layout } = DefaultTheme;

const changeLanguage = (langIndex) => {
  language.value = allLanguages[langIndex];

  localStorage.setItem(".vitepress-select-language", allLanguages[langIndex]);
  const body = document.querySelector("body");
  const classNames = [];
  for (const index in allLanguages) {
    classNames.push("lang-index-" + (Number(index) + 1));
  }
  for (const className of classNames) {
    body.classList.remove(className);
  }
  body.classList.add(classNames[langIndex]);
  let styleElement = document.querySelector('style[is-lang-css="yes"]');
  if (styleElement === null) {
    styleElement = document.createElement("style");
    styleElement.setAttribute("type", "text/css");
    styleElement.setAttribute("is-lang-css", "yes");
    document.head.appendChild(styleElement);
  }
  let style = "";

  for (const i in allLanguages) {
    if (Number(i) !== Number(langIndex)) {
      style = style + "\n" + `.lang-${allLanguages[i]} { display: none !important; }`;
    } else {
      style = style + "\n" + `.lang-${allLanguages[i]} { display: inline !important; }`;
    }
  }

  // docs
  for (const i in allLanguages) {
    for (const j in allLanguages) {
      if (i === j) {
        continue;
      }
      style = style + "\n" + `.lang-index-${Number(i) + 1} .enable-i18n > *:nth-child(${allLanguages.length}n + ${Number(j) + 1}) {`;
      style = style + "\n" + `display: none;`;
      style = style + "\n" + `}`;
    }
  }

  styleElement.innerHTML = style;
};

onMounted(() => {
  const lang = localStorage.getItem(".vitepress-select-language") || "en";
  language.value = lang;
  const langIndex = allLanguages.findIndex((l) => l === lang);
  changeLanguage(langIndex);
  const body = document.querySelector("body");
  nextTick(() => {
    body.classList.add("i18n-loaded");
  });
});
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="doc-before-container">
        <ClientOnly>
          <div class="language-selector" v-if="enableI18NForThisPage">
            <div class="message">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="var(--vp-c-text-1)"
                  d="M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"
                ></path>
              </svg>
              <span> Hey! Do you want to read in other languages? </span>
            </div>
            <div class="gap"></div>
            <div class="languages">
              <div v-if="language === allLanguages[0]" class="button" @click="changeLanguage(1)">Read in English</div>
              <div v-else class="button" @click="changeLanguage(0)">阅读中文</div>
            </div>
          </div>
          <div class="language-selector" v-else>
            <div class="message">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="var(--vp-c-text-1)"
                  d="M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"
                ></path>
              </svg>
              Whoops! It looks like it doesn't have multilingual support yet!
            </div>
            <div class="gap"></div>
            <a class="button" :href="improveUrl" target="_blank">IMPROVE</a>
          </div>
        </ClientOnly>
      </div>
    </template>
  </Layout>
</template>

<style>
.doc-before-container {
  min-height: 48px;
  animation: doc-before-container-in 240ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: 640ms;
}

@keyframes doc-before-container-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.language-selector {
  background-color: var(--vp-c-bg-alt);
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 32px;
  min-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.language-selector * {
  box-sizing: content-box;
}

.language-selector > .message {
  display: flex;
}

.language-selector > .message > svg {
  width: 20px;
  margin-right: 8px;
  flex-shrink: 0;
}

.language-selector > .gap {
  flex: 1;
}

.language-selector .button {
  display: flex;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.8em;
  font-weight: bold;
  background-color: var(--vp-c-bg);
}

.language-selector > .languages {
  display: flex;
}

.language-selector > .languages > .item {
  display: flex;
  padding: 4px 8px;
  cursor: pointer;
}

.language-selector > .languages > .item.active {
  font-weight: bold;
  text-decoration: underline;
}

@media screen and (max-width: 960px) {
  .language-selector {
    width: 100%;
    flex-direction: column;
  }

  .language-selector > .gap {
    flex: 0;
  }
}
</style>
