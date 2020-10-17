<template>
    <div id="container">
        <section id="header" v-html="resp"></section>
        <div class="alert alert-warning" role="alert">
            こちらのサイトの限界大会に関するコンテンツは、限界大会公式サイトに移転予定です。
        </div>
        <section class="container py-5">
            <h1>お知らせ</h1>
            <p class="mb-4">
                TeamOpenWorldや関連サービス・団体に関するお知らせを掲載しています。
            </p>
            <div v-for="n in key_list" class="card my-2">
                <div class="card-header">
                    {{ obj_list[n]["tag"] }}
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        {{ obj_list[n]["title"] }}
                        <span class="badge badge-pill badge-dark">{{
                            obj_list[n]["date"]
                        }}</span>
                    </h5>
                    <p class="card-text">{{ obj_list[n]["description"] }}</p>
                    <a
                        :href="
                            '/post/' + obj_list[n]['sourceBase'].slice(0, -3)
                        "
                        class="btn btn-primary"
                        >続きを読む</a
                    >
                </div>
            </div>
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
    async asyncData({ app }) {
        let resp = await app.$axios.$get(
            "https://open-w.net/assets/header/header.html"
        );

        const postlist = await import(`~/article/summary.json`);

        var md_list = postlist["sourceFileArray"];
        var key_list = [];

        for (var i in md_list) {
            i = md_list[i];
            i = i.replace(/md/g, "json");

            key_list.unshift(i);
        }

        var obj_list = postlist["fileMap"];
        key_list = key_list.slice(0, 4);

        return { resp, key_list, obj_list };
    },
    head() {
        return {
            title: "お知らせ"
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
</style>
