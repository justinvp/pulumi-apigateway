import * as apigateway from "@pulumi/apigateway";

const page = new apigateway.StaticPage("page", {
    indexContent: "<html><body><p>Hello world!</p></body></html>",
});

export const bucket = page.bucket;
export const url = page.websiteUrl;
