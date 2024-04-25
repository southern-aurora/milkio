import{_ as l,c as e,J as t,w as n,a4 as h,E as k,o,m as s,a as i}from"./chunks/framework.B_Y9JRDA.js";const M=JSON.parse('{"title":"Get Started","description":"","frontmatter":{"title":"Get Started"},"headers":[],"relativePath":"docs/cookbook/get-started.md","filePath":"docs/cookbook/get-started.md"}'),p={name:"docs/cookbook/get-started.md"},r=s("h1",{id:"起步",tabindex:"-1"},[i("起步 "),s("a",{class:"header-anchor",href:"#起步","aria-label":'Permalink to "起步"'},"​")],-1),d=s("h1",{id:"get-started",tabindex:"-1"},[i("Get Started "),s("a",{class:"header-anchor",href:"#get-started","aria-label":'Permalink to "Get Started"'},"​")],-1),E=s("p",null,"Cookbook 是一个 API 文档生成器，可以在一个漂亮的页面上，查看你的 Milkio 工程的所有 API。",-1),c=s("p",null,"Cookbook is an API documentation generator that allows you to view all the APIs of your Milkio project on a beautiful webpage.",-1),g=s("p",null,[i("可以 "),s("a",{href:"https://southern-aurora.github.io/milkio-cookbook/",target:"_blank",rel:"noreferrer"},"点击这里"),i(" 来查看它。")],-1),y=s("p",null,[i("You can "),s("a",{href:"https://southern-aurora.github.io/milkio-cookbook/",target:"_blank",rel:"noreferrer"},"click here"),i(" to view it.")],-1),u=s("p",null,"暂时的，Cookbook 还处于开发阶段，因此它还有一些 bug，以及本文档还不够完善详细。在未来，这些都会改进。",-1),F=s("p",null,"Temporary, Cookbook is still in the development stage, so it still has some bugs, and this document is not detailed enough. These will be improved in the future.",-1),_=s("h2",{id:"使用",tabindex:"-1"},[i("使用 "),s("a",{class:"header-anchor",href:"#使用","aria-label":'Permalink to "使用"'},"​")],-1),b=s("h2",{id:"usage",tabindex:"-1"},[i("Usage "),s("a",{class:"header-anchor",href:"#usage","aria-label":'Permalink to "Usage"'},"​")],-1),C=s("p",null,[i("在你的 "),s("code",null,"/src/apps"),i(" 中，新建一个 API，文件名为 "),s("code",null,"cookbook.ts"),i("。填入以下内容：")],-1),m=s("p",null,[i("In your "),s("code",null,"/src/apps"),i(", create a new API called "),s("code",null,"cookbook.ts"),i(". Fill in the following content:")],-1),f=h(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineApi,  reject } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;milkio&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { cwd } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node:process&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { join } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;path&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typia </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;typia&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> api</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> paasword</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Pa$$w0rd!&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (params </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> paasword) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BUSINESS_FAIL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Only with the correct parameters can Cookbook be accessed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bun.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;generated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cookbook.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,1),B=s("p",null,[i("其中的 "),s("code",null,"password"),i(" 部分，是用来限制你的 "),s("code",null,"cookbook.json"),i(" 不会泄露出去。你也可以自由地编写你希望的验证逻辑，或者不验证，公开给任何人。")],-1),A=s("p",null,[i("The "),s("code",null,"password"),i(" part is used to restrict the exposure of your "),s("code",null,"cookbook.json"),i(". You are also free to write your desired validation logic or not validate it at all, making it accessible to anyone.")],-1),w=s("p",null,[i("打开 "),s("a",{href:"https://southern-aurora.github.io/milkio-cookbook/",target:"_blank",rel:"noreferrer"},"Cookbook"),i(" 网站，点击 "),s("code",null,"Edit Connect Config"),i("，将下面的 JSON 粘贴进去，这是连接你刚刚编写的接口所需要的配置。")],-1),v=s("p",null,[i("Open the "),s("a",{href:"https://southern-aurora.github.io/milkio-cookbook/",target:"_blank",rel:"noreferrer"},"Cookbook"),i(" website, click on "),s("code",null,"Edit Connect Config"),i(", and paste the following JSON into it. This is the configuration needed to connect to the API you just created.")],-1),D=s("div",{class:"language-json vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'  "Local Origin"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "cookbook"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"http://localhost:9000/cookbook"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "base"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"http://localhost:9000/"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "params"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Pa$$w0rd!"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "headers"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),q=s("div",{class:"language-json vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'  "Local Origin"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "cookbook"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"http://localhost:9000/cookbook"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "base"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"http://localhost:9000/"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "params"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Pa$$w0rd!"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "headers"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1),P=s("p",null,"不出意外，你就可以 使用 Cookbook 来阅读你 Milkio 的所有文档了。",-1),I=s("p",null,"Without surprise, you can use the Cookbook to read all the documentation of Milkio.",-1),S=s("p",null,[i("暂时的，Cookbook 还不是很完善，如果你想改进它或者修复一些 bug，可以前往 "),s("a",{href:"https://github.com/southern-aurora/milkio-cookbook",target:"_blank",rel:"noreferrer"},"Cookbook 仓库"),i("。")],-1),j=s("p",null,[i("For now, Cookbook is still a work in progress. If you want to improve it or fix some bugs, you can visit the Cookbook repository at "),s("a",{href:"https://github.com/southern-aurora/milkio-cookbook",target:"_blank",rel:"noreferrer"},"https://github.com/southern-aurora/milkio-cookbook"),i(".")],-1);function x(N,T,$,O,V,G){const a=k("I18N");return o(),e("div",null,[t(a,null,{default:n(()=>[r,d,E,c,g,y,u,F,_,b,C,m]),_:1}),f,t(a,null,{default:n(()=>[B,A,w,v,D,q,P,I,S,j]),_:1})])}const L=l(p,[["render",x]]);export{M as __pageData,L as default};
