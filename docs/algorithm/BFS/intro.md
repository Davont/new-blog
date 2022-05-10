---
id: intro
title: BFS模板
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: BFS模板
keywords:
  - JavaScript
  - frontend
  - BFS
# image: https://i.imgur.com/mErPwqL.png
---

## BFS 简介

其实 BFS 和 DFS 大家都很熟悉了，没真正学过，肯定也在刷算法时候有所耳闻。DFS 就是“一条道走到黑”，BFS 就是“优先探索最近资源”。~~（有点像在打黑魂...）~~

## BFS 用到的数据结构
### 1.题目里

- Graph：图一般是涉及到 DFS 的解法，也可以用 BFS，算作一个变种啦，本质都是搜索类型的算法。
- Binary Tree： 二叉树很好理解，层序遍历就有了，包括一些树的搜索等等。
- 矩阵：图的衍生结构，有用邻接矩阵的。比如 clone graph，比如岛屿问题。

### 2. 写代码时候

- hashmap：用来存储图的点和值，有时候会去重，一般叫做 visited。
- queue/stack：用来存储 **当前层或下一层** 未遍历的点。再下下一层就不存储啦。

> 有些题 BFS 还会使用什么双队列什么的，本文先不展开了。

## BFS 模板
```js
function bfs(graph, start) {
    const queue = [start];
    const visited = {
        [start]: true,// 或者 [start.val]: start
    };

    while (queue.length) {
        const popNode = queue.shift();
        const neighbors = graph[popNode];
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (!visited[neighbor]) {// 或者 if (!(neighbor in visited)){
                // highlight-next-line
                visited[neighbor] = true; // or other
                queue.push(neighbor);
            }
        }
    }
    return visited;
}
```