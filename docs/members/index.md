---
layout: page
---

<!-- markdownlint-disable MD033 MD041 -->
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const erlingersi = [
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=1479144200&s=640',
    name: '孙弘凯',
    title: '成员',
  },
];


const erlingerwu = [
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=3602276692&s=640',
    name: '潘佳煌',
    title: '2023-2024台球社社长',
    desc: '促使学校翻新了台球室，组织段赛等活动，最伟大的一届社长'
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=2797512412&s=640',
    name: '陈梓贤',
    title: '成员',
    desc: '设计了logo并搭建了此网站，若有同样需求可以找他<br><br>通过邮箱联系（xmfls@0wind.cn）',
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=1196017445&s=640',
    name: '陆齐岳',
    title: '体育部副部长 台球社成员',
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=2439673893&s=640',
    name: '林思彤',
    title: '成员',
  },
];

const erlingerliu = [
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=2956774438&s=640',
    name: '王晰',
    title: '2023-2024台球社副社长',
    desc: '参与组织第一次段赛，翻译了规则文档，设计了台球室的海报'
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=3360399601&s=640',
    name: '魏满堂',
    title: '成员'
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=2026708129&s=640',
    name: '谢文博',
    title: '成员'
  },
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=1437810491&s=640',
    name: '邱鑫泉',
    title: '成员'
  },
];

const erlingerqi = [
  {
    avatar: 'http://q1.qlogo.cn/g?b=qq&nk=3530989961&s=640',
    name: '曾昭宇',
    title: '成员'
  },
];
</script>



<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      2024届成员
    </template>
    <template #lead>
      台球社复兴前一代
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="erlingersi"
  />
  <VPTeamPageTitle>
    <template #title>
      2025届成员
    </template>
    <template #lead>
      台球社复兴一代
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="erlingerwu"
  />
  <VPTeamPageTitle>
    <template #title>
      2026届成员
    </template>
    <template #lead>
      台球社复兴二代
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="erlingerliu"
  />
  <VPTeamPageTitle>
    <template #title>
      2027届成员
    </template>
    <template #lead>
      台球社复兴三代
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="erlingerqi"
  />
</VPTeamPage>