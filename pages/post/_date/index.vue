<template>
    <div id="container">
        <div class="alert alert-warning" role="alert">
            こちらのサイトの限界大会に関するコンテンツは、限界大会公式サイトに移転予定です。
        </div>
        <section class="container py-5">
            <a href="/">◀ back to top</a><br />
            <h1 class="mt-4">{{ body["title"] }}</h1>
            <p class="badge badge-info">{{ body["tag"] }}</p>
            <p>最終更新: {{ body["date"] }}</p>
            <hr class="mt-4 mb-5" color="black" />
            <div class="markdown-body" v-html="body['bodyHtml']"></div>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <!-- OpenWorld Info -->
            <ins
                class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7860710257272145"
                data-ad-slot="8822832069"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </section>
        <div class="footer-copyright text-center mt-5 py-3">
            © 2020 TeamOpenWorld
        </div>
        <script>
            $(function() {
                $("#info").addClass("active");
            });
        </script>
    </div>
</template>

<script>
export default {
    async asyncData({ app, params }) {
        const body = await import(`~/article/json/${params.date}.json`);

        return { body };
    },
    head() {
        return {
            title: this.body["title"]
        };
    }
};
</script>

<style>
h1,
h5 {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
}
p,
a,
.card-header {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 300;
}

div.markdown-body .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
}

div.markdown-body .anchor {
    float: left;
    line-height: 1;
    margin-left: -20px;
    padding-right: 4px;
}

div.markdown-body .anchor:focus {
    outline: none;
}

div.markdown-body h1 .octicon-link,
div.markdown-body h2 .octicon-link,
div.markdown-body h3 .octicon-link,
div.markdown-body h4 .octicon-link,
div.markdown-body h5 .octicon-link,
div.markdown-body h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
}

div.markdown-body h1:hover .anchor,
div.markdown-body h2:hover .anchor,
div.markdown-body h3:hover .anchor,
div.markdown-body h4:hover .anchor,
div.markdown-body h5:hover .anchor,
div.markdown-body h6:hover .anchor {
    text-decoration: none;
}

div.markdown-body h1:hover .anchor .octicon-link,
div.markdown-body h2:hover .anchor .octicon-link,
div.markdown-body h3:hover .anchor .octicon-link,
div.markdown-body h4:hover .anchor .octicon-link,
div.markdown-body h5:hover .anchor .octicon-link,
div.markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
}

div.markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #24292e;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
}

div.markdown-body .pl-c {
    color: #6a737d;
}

div.markdown-body .pl-c1,
div.markdown-body .pl-s .pl-v {
    color: #005cc5;
}

div.markdown-body .pl-e,
div.markdown-body .pl-en {
    color: #6f42c1;
}

div.markdown-body .pl-s .pl-s1,
div.markdown-body .pl-smi {
    color: #24292e;
}

div.markdown-body .pl-ent {
    color: #22863a;
}

div.markdown-body .pl-k {
    color: #d73a49;
}

div.markdown-body .pl-pds,
div.markdown-body .pl-s,
div.markdown-body .pl-s .pl-pse .pl-s1,
div.markdown-body .pl-sr,
div.markdown-body .pl-sr .pl-cce,
div.markdown-body .pl-sr .pl-sra,
div.markdown-body .pl-sr .pl-sre {
    color: #032f62;
}

div.markdown-body .pl-smw,
div.markdown-body .pl-v {
    color: #e36209;
}

div.markdown-body .pl-bu {
    color: #b31d28;
}

div.markdown-body .pl-ii {
    background-color: #b31d28;
    color: #fafbfc;
}

div.markdown-body .pl-c2 {
    background-color: #d73a49;
    color: #fafbfc;
}

div.markdown-body .pl-c2:before {
    content: "^M";
}

div.markdown-body .pl-sr .pl-cce {
    color: #22863a;
    font-weight: 700;
}

div.markdown-body .pl-ml {
    color: #735c0f;
}

div.markdown-body .pl-mh,
div.markdown-body .pl-mh .pl-en,
div.markdown-body .pl-ms {
    color: #005cc5;
    font-weight: 700;
}

div.markdown-body .pl-mi {
    color: #24292e;
    font-style: italic;
}

div.markdown-body .pl-mb {
    color: #24292e;
    font-weight: 700;
}

div.markdown-body .pl-md {
    background-color: #ffeef0;
    color: #b31d28;
}

div.markdown-body .pl-mi1 {
    background-color: #f0fff4;
    color: #22863a;
}

div.markdown-body .pl-mc {
    background-color: #ffebda;
    color: #e36209;
}

div.markdown-body .pl-mi2 {
    background-color: #005cc5;
    color: #f6f8fa;
}

div.markdown-body .pl-mdr {
    color: #6f42c1;
    font-weight: 700;
}

div.markdown-body .pl-ba {
    color: #586069;
}

div.markdown-body .pl-sg {
    color: #959da5;
}

div.markdown-body .pl-corl {
    color: #032f62;
    text-decoration: underline;
}

div.markdown-body details {
    display: block;
}

div.markdown-body summary {
    display: list-item;
}

div.markdown-body a {
    background-color: transparent;
}

div.markdown-body a:active,
div.markdown-body a:hover {
    outline-width: 0;
}

div.markdown-body strong {
    font-weight: inherit;
    font-weight: bolder;
}

div.markdown-body h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

div.markdown-body img {
    border-style: none;
}

div.markdown-body code,
div.markdown-body kbd,
div.markdown-body pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

div.markdown-body hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

div.markdown-body input {
    font: inherit;
    margin: 0;
}

div.markdown-body input {
    overflow: visible;
}

div.markdown-body [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

div.markdown-body * {
    box-sizing: border-box;
}

div.markdown-body input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

div.markdown-body a {
    color: #0366d6;
    text-decoration: none;
}

div.markdown-body a:hover {
    text-decoration: underline;
}

div.markdown-body strong {
    font-weight: 600;
}

div.markdown-body hr {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
    height: 0;
    margin: 15px 0;
    overflow: hidden;
}

div.markdown-body hr:before {
    content: "";
    display: table;
}

div.markdown-body hr:after {
    clear: both;
    content: "";
    display: table;
}

div.markdown-body table {
    border-collapse: collapse;
    border-spacing: 0;
}

div.markdown-body td,
div.markdown-body th {
    padding: 0;
}

div.markdown-body details summary {
    cursor: pointer;
}

div.markdown-body h1,
div.markdown-body h2,
div.markdown-body h3,
div.markdown-body h4,
div.markdown-body h5,
div.markdown-body h6 {
    margin-bottom: 0;
    margin-top: 0;
}

div.markdown-body h1 {
    font-size: 32px;
}

div.markdown-body h1,
div.markdown-body h2 {
    font-weight: 600;
}

div.markdown-body h2 {
    font-size: 24px;
}

div.markdown-body h3 {
    font-size: 20px;
}

div.markdown-body h3,
div.markdown-body h4 {
    font-weight: 600;
}

div.markdown-body h4 {
    font-size: 16px;
}

div.markdown-body h5 {
    font-size: 14px;
}

div.markdown-body h5,
div.markdown-body h6 {
    font-weight: 600;
}

div.markdown-body h6 {
    font-size: 12px;
}

div.markdown-body p {
    margin-bottom: 10px;
    margin-top: 0;
}

div.markdown-body blockquote {
    margin: 0;
}

div.markdown-body ol,
div.markdown-body ul {
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
}

div.markdown-body ol ol,
div.markdown-body ul ol {
    list-style-type: lower-roman;
}

div.markdown-body ol ol ol,
div.markdown-body ol ul ol,
div.markdown-body ul ol ol,
div.markdown-body ul ul ol {
    list-style-type: lower-alpha;
}

div.markdown-body dd {
    margin-left: 0;
}

div.markdown-body code,
div.markdown-body pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
        monospace;
    font-size: 12px;
}

div.markdown-body pre {
    margin-bottom: 0;
    margin-top: 0;
}

div.markdown-body input::-webkit-inner-spin-button,
div.markdown-body input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

div.markdown-body .border {
    border: 1px solid #e1e4e8 !important;
}

div.markdown-body .border-0 {
    border: 0 !important;
}

div.markdown-body .border-bottom {
    border-bottom: 1px solid #e1e4e8 !important;
}

div.markdown-body .rounded-1 {
    border-radius: 3px !important;
}

div.markdown-body .bg-white {
    background-color: #fff !important;
}

div.markdown-body .bg-gray-light {
    background-color: #fafbfc !important;
}

div.markdown-body .text-gray-light {
    color: #6a737d !important;
}

div.markdown-body .mb-0 {
    margin-bottom: 0 !important;
}

div.markdown-body .my-2 {
    margin-bottom: 8px !important;
    margin-top: 8px !important;
}

div.markdown-body .pl-0 {
    padding-left: 0 !important;
}

div.markdown-body .py-0 {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
}

div.markdown-body .pl-1 {
    padding-left: 4px !important;
}

div.markdown-body .pl-2 {
    padding-left: 8px !important;
}

div.markdown-body .py-2 {
    padding-bottom: 8px !important;
    padding-top: 8px !important;
}

div.markdown-body .pl-3,
div.markdown-body .px-3 {
    padding-left: 16px !important;
}

div.markdown-body .px-3 {
    padding-right: 16px !important;
}

div.markdown-body .pl-4 {
    padding-left: 24px !important;
}

div.markdown-body .pl-5 {
    padding-left: 32px !important;
}

div.markdown-body .pl-6 {
    padding-left: 40px !important;
}

div.markdown-body .f6 {
    font-size: 12px !important;
}

div.markdown-body .lh-condensed {
    line-height: 1.25 !important;
}

div.markdown-body .text-bold {
    font-weight: 600 !important;
}

div.markdown-body:before {
    content: "";
    display: table;
}

div.markdown-body:after {
    clear: both;
    content: "";
    display: table;
}

div.markdown-body > :first-child {
    margin-top: 0 !important;
}

div.markdown-body > :last-child {
    margin-bottom: 0 !important;
}

div.markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
}

div.markdown-body blockquote,
div.markdown-body dl,
div.markdown-body ol,
div.markdown-body p,
div.markdown-body pre,
div.markdown-body table,
div.markdown-body ul {
    margin-bottom: 16px;
    margin-top: 0;
}

div.markdown-body hr {
    background-color: #e1e4e8;
    border: 0;
    height: 0.25em;
    margin: 24px 0;
    padding: 0;
}

div.markdown-body blockquote {
    border-left: 0.25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
}

div.markdown-body blockquote > :first-child {
    margin-top: 0;
}

div.markdown-body blockquote > :last-child {
    margin-bottom: 0;
}

div.markdown-body kbd {
    background-color: #fafbfc;
    border: 1px solid #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
    color: #444d56;
    display: inline-block;
    font-size: 11px;
    line-height: 10px;
    padding: 3px 5px;
    vertical-align: middle;
}

div.markdown-body h1,
div.markdown-body h2,
div.markdown-body h3,
div.markdown-body h4,
div.markdown-body h5,
div.markdown-body h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 16px;
    margin-top: 24px;
}

div.markdown-body h1 {
    font-size: 2em;
}

div.markdown-body h1,
div.markdown-body h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
}

div.markdown-body h2 {
    font-size: 1.5em;
}

div.markdown-body h3 {
    font-size: 1.25em;
}

div.markdown-body h4 {
    font-size: 1em;
}

div.markdown-body h5 {
    font-size: 0.875em;
}

div.markdown-body h6 {
    color: #6a737d;
    font-size: 0.85em;
}

div.markdown-body ol,
div.markdown-body ul {
    padding-left: 2em;
}

div.markdown-body ol ol,
div.markdown-body ol ul,
div.markdown-body ul ol,
div.markdown-body ul ul {
    margin-bottom: 0;
    margin-top: 0;
}

div.markdown-body li {
    word-wrap: break-all;
}

div.markdown-body li > p {
    margin-top: 16px;
}

div.markdown-body li + li {
    margin-top: 0.25em;
}

div.markdown-body dl {
    padding: 0;
}

div.markdown-body dl dt {
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
    margin-top: 16px;
    padding: 0;
}

div.markdown-body dl dd {
    margin-bottom: 16px;
    padding: 0 16px;
}

div.markdown-body table {
    display: block;
    overflow: auto;
    width: 100%;
}

div.markdown-body table th {
    font-weight: 600;
}

div.markdown-body table td,
div.markdown-body table th {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
}

div.markdown-body table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
}

div.markdown-body table tr:nth-child(2n) {
    background-color: #f6f8fa;
}

div.markdown-body img {
    background-color: #fff;
    box-sizing: content-box;
    max-width: 100%;
}

div.markdown-body img[align="right"] {
    padding-left: 20px;
}

div.markdown-body img[align="left"] {
    padding-right: 20px;
}

div.markdown-body code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
}

div.markdown-body pre {
    word-wrap: normal;
}

div.markdown-body pre > code {
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    white-space: pre;
    word-break: normal;
}

div.markdown-body .highlight {
    margin-bottom: 16px;
}

div.markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
}

div.markdown-body .highlight pre,
div.markdown-body pre {
    background-color: #f6f8fa;
    border-radius: 3px;
    font-size: 85%;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
}

div.markdown-body pre code {
    background-color: transparent;
    border: 0;
    display: inline;
    line-height: inherit;
    margin: 0;
    max-width: auto;
    overflow: visible;
    padding: 0;
    word-wrap: normal;
}

div.markdown-body .commit-tease-sha {
    color: #444d56;
    display: inline-block;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
        monospace;
    font-size: 90%;
}

div.markdown-body .blob-wrapper {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    overflow-x: auto;
    overflow-y: hidden;
}

div.markdown-body .blob-wrapper-embedded {
    max-height: 240px;
    overflow-y: auto;
}

div.markdown-body .blob-num {
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    color: rgba(27, 31, 35, 0.3);
    cursor: pointer;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
        monospace;
    font-size: 12px;
    line-height: 20px;
    min-width: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: right;
    user-select: none;
    vertical-align: top;
    white-space: nowrap;
    width: 1%;
}

div.markdown-body .blob-num:hover {
    color: rgba(27, 31, 35, 0.6);
}

div.markdown-body .blob-num:before {
    content: attr(data-line-number);
}

div.markdown-body .blob-code {
    line-height: 20px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    vertical-align: top;
}

div.markdown-body .blob-code-inner {
    color: #24292e;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
        monospace;
    font-size: 12px;
    overflow: visible;
    white-space: pre;
    word-wrap: normal;
}

div.markdown-body .pl-token.active,
div.markdown-body .pl-token:hover {
    background: #ffea7f;
    cursor: pointer;
}

div.markdown-body kbd {
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-bottom-color: #c6cbd1;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #c6cbd1;
    color: #444d56;
    display: inline-block;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
        monospace;
    line-height: 10px;
    padding: 3px 5px;
    vertical-align: middle;
}

div.markdown-body :checked + .radio-label {
    border-color: #0366d6;
    position: relative;
    z-index: 1;
}

div.markdown-body .tab-size[data-tab-size="1"] {
    -moz-tab-size: 1;
    tab-size: 1;
}

div.markdown-body .tab-size[data-tab-size="2"] {
    -moz-tab-size: 2;
    tab-size: 2;
}

div.markdown-body .tab-size[data-tab-size="3"] {
    -moz-tab-size: 3;
    tab-size: 3;
}

div.markdown-body .tab-size[data-tab-size="4"] {
    -moz-tab-size: 4;
    tab-size: 4;
}

div.markdown-body .tab-size[data-tab-size="5"] {
    -moz-tab-size: 5;
    tab-size: 5;
}

div.markdown-body .tab-size[data-tab-size="6"] {
    -moz-tab-size: 6;
    tab-size: 6;
}

div.markdown-body .tab-size[data-tab-size="7"] {
    -moz-tab-size: 7;
    tab-size: 7;
}

div.markdown-body .tab-size[data-tab-size="8"] {
    -moz-tab-size: 8;
    tab-size: 8;
}

div.markdown-body .tab-size[data-tab-size="9"] {
    -moz-tab-size: 9;
    tab-size: 9;
}

div.markdown-body .tab-size[data-tab-size="10"] {
    -moz-tab-size: 10;
    tab-size: 10;
}

div.markdown-body .tab-size[data-tab-size="11"] {
    -moz-tab-size: 11;
    tab-size: 11;
}

div.markdown-body .tab-size[data-tab-size="12"] {
    -moz-tab-size: 12;
    tab-size: 12;
}

div.markdown-body .task-list-item {
    list-style-type: none;
}

div.markdown-body .task-list-item + .task-list-item {
    margin-top: 3px;
}

div.markdown-body .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
}

div.markdown-body hr {
    border-bottom-color: #eee;
}

div.markdown-body .pl-0 {
    padding-left: 0 !important;
}

div.markdown-body .pl-1 {
    padding-left: 4px !important;
}

div.markdown-body .pl-2 {
    padding-left: 8px !important;
}

div.markdown-body .pl-3 {
    padding-left: 16px !important;
}

div.markdown-body .pl-4 {
    padding-left: 24px !important;
}

div.markdown-body .pl-5 {
    padding-left: 32px !important;
}

div.markdown-body .pl-6 {
    padding-left: 40px !important;
}

div.markdown-body .pl-7 {
    padding-left: 48px !important;
}

div.markdown-body .pl-8 {
    padding-left: 64px !important;
}

div.markdown-body .pl-9 {
    padding-left: 80px !important;
}

div.markdown-body .pl-10 {
    padding-left: 96px !important;
}

div.markdown-body .pl-11 {
    padding-left: 112px !important;
}

div.markdown-body .pl-12 {
    padding-left: 128px !important;
}
</style>
