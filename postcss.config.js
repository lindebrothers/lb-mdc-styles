const postcssMerge = require('postcss-merge-selectors');
const postcssGrouper = require('postcss-grouper');
const postcssMergeRules = require('postcss-merge-rules')
const importUrl = require('postcss-import-url');
const autoprefixer = require('autoprefixer');
const combineMediaQuery = require('postcss-combine-media-query')
const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors')
const mqpacker = require("css-mqpacker");
const emptymediaqueries = require("postcss-emptymediaqueries");
module.exports = {
    plugins: [

        postcssGrouper(),
        //combineMediaQuery(),
        //combineDuplicatedSelectors({
        //    removeDuplicatedProperties: false,
        //    removeDuplicatedValues: true,
        //}),

        //postcssMerge(),
        emptymediaqueries({ /* options */ }),
        //require('postcss-mqwidth-to-class'),
        //postcssMergeRules(),
        //mqpacker({
        //  sort: true
        //}),
        importUrl({modernBrowser: true}),
        autoprefixer(),
        require('cssnano')({
            preset: 'advanced',
        }),
    ],

};
