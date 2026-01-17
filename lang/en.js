// ---------- Navbar titles
const enNavbarData = {
  title: " Dongyang Li ",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Dongyang Li ",
  jobTitle: " Lecturer ",
  home_title: "About me",
  home_content: `
  <div>
    <p> I'm a lecturer at Faculty of Artificial Intelligence, Shanghai University of Electric Power. I have obtained my Ph.D degree from East China Normal University (ECNU), supervised by Prof. Xiaofeng He. 
    Currently, my research interests are large language models (Text-Modal & Multi-Modal) and multi-agent system. 
    I have published papers in top-tier international conferences and journals, such as ACL, AAAI, EMNLP, COLING, KBS, ECAI, etc.3
    </p>
    <h2 class='title'> Research Interests </h2>
    <p><strong>Looking for master’s students to work on large language models, multi-agent system! </strong> </p>
    <ul>
      <li> Large Language Models (Text-Modal & Multi-Modal)</li>
      <li> Multi-Agent System </li>
      <li> Knowledge-Enhanced Language Models </li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Conference & Journal Papers",
  // type_one_items: [
  //   {
  //     title: `Dancing to the beat of climate change: Studying visual frames on TikTok through the left-right divide among U.S. politicians (with ).`,
  //     abstract: `
  // <div>
  //   <ul>
  //     <li> <strong>On the Role of Long-tail Knowledge in Retrieval Augmented Large Language Models</strong> <br>
  //     <strong>Dongyang Li</strong>, Junbing Yan, Taolin Zhang, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang<br>
  //     <strong>ACL 2024 (CCF-A)</strong>
  //     </li>
  //     <li> <strong>HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction</strong><br>
  //     <strong>Dongyang Li</strong>, Taolin Zhang, Nan Hu, Chengyu Wang, Xiaofeng He<br>
  //     <strong>ACL 2022 (CCF-A)</strong> 
  //     </li>
  //     <li> <strong>Mnemosyne: Accelerating Multi-Hop Question Answering via Cache Hit Order Fitting</strong><br>
  //     Haizhou Du, Jiujiu Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, Lisheng Wang<br>
  //     <strong>AAAI 2026 (CCF-A)</strong> 
  //     </li>
  //     </li>
  //     <li> <strong>DCTR: Dual-Constraint Subgraph Optimization for Knowledge Graph-based Retrieval-Augmented Generation</strong><br>
  //     Yukun Cao, Zirui Xu, <strong>Dongyang Li<sup>✉</sup><strong>, Zhihao Guo, Luobin Huang, Lisheng Wang<br>
  //     <strong>AAAI 2026 (CCF-A)</strong> </p>
  //     </li>
  //     </li>
  //     <li> <strong>KEHRL: Learning Knowledge-Enhanced Language Representations with Hierarchical Reinforcement Learning</strong><br>
  //     <strong>Dongyang Li</strong>, Taolin Zhang, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue
  //     <strong>COLING 2024 (CCF-B)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>UniPSDA: Unsupervised Pseudo Semantic Data Augmentation for Zero-Shot Cross-Lingual Natural Language Understanding</strong><br>
  //     <strong>Dongyang Li</strong>, Taolin Zhang, Jiali Deng, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue<br>
  //     <strong>COLING 2024 (CCF-B)</strong>
  //     </li>
  //     <li> <strong>MCFC: A Momentum-Driven Clicked Feature Compressed Pre-trained Language Model for Information Retrieval</strong><br>
  //     <strong>Dongyang Li</strong>, Ruixue Ding, Pengjun Xie, Xiaofeng He<br>
  //     <strong>NLPCC 2024 (CCF-C)</strong>
  //     </li>
  //     <li> <strong>GeoGLUE: A Chinese GeoGraphic Language Understanding Evaluation Benchmark</strong><br>
  //     <strong>Dongyang Li</strong>, Ruixue Ding, Qiang Zhang, Zheng Li, Boli Chen, Pengjun Xie, Yao Xu, Xin Li, Ning Guo, Fei Huang, Xiaofeng He<br>
  //     <strong>ADMA 2024 (CCF-C)</strong>
  //     </li>
  //     <li> <strong>DAFNet: Dynamic Auxiliary Fusion for Sequential Model Editing in Large Language Models</strong><br>
  //     Taolin Zhang, Qizhou Chen, <strong>Dongyang Li (Co-first author)</strong>, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang<br>
  //     <strong>ACL 2024 (CCF-A)</strong>
  //     </li>
  //     <li> <strong>R4: Reinforced Retriever-Reorder-Responder for   Retrieval-Augmented Large Language Models</strong><br>
  //     Taolin Zhang, <strong>Dongyang Li (Co-first author)</strong>, Qizhou Chen, Chengyu Wang, Longtao Huang, Hui Xue, Xiaofeng He, Jun Huang<br>
  //     <strong>ECAI 2024 (CCF-B)</strong>
  //     </li>
  //     <li> <strong>Text-Driven Hybrid Curriculum Learning for Multimodal Sentiment Analysis</strong><br>
  //     Feifei Xu, Puzhe Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, and Wenjing Zhu<br>
  //     <strong>MMM 2026 (CCF-C)</strong> <br>
  //     </li>
  //     <li> <strong>Question-Aware Spatial-Temporal Reasoning in Patch for Audio-Visual Question Answering</strong><br>
  //     Feifei Xu, Wenjing Zhu, <strong>Dongyang Li<sup>✉</sup><strong>, and Puzhe Li<br>
  //     <strong>MMM 2026 (CCF-C)</strong>
  //     </li>
  //     <li> <strong>LME-DETR: Lightweight and Multi-Scale Feature-Enhanced End-to-End Object Detection for Aerial Images</strong><br>
  //     Feifei Xu, Yu Xie, <strong>Dongyang Li<sup>✉</sup><strong>, luobin Huang, Zhihao Guo<br>
  //     <strong>MMM 2026</strong>
  //     </li>
  //     <li> <strong>CUOM: A Causal Unbiased Optimization Method for Federated Domain</strong><br>
  //     Mi Wen, Kang Han, <strong>Dongyang Li</strong>, QiYe Cai, HaiLun Shen<br>
  //     <strong>KBS (SCI Q1 journal)</strong> </p>
  //     </li>
  //     <li> <strong>Taming the Long Tail in Federated Learning: A Unified Global and Personalized Model Framework</strong><br>
  //     Pengsong Zhang, Mi Wen, Zhou Zhu, <strong>Dongyang Li</strong><br>
  //     <strong>Information Sciences (SCI Q2 journal)</strong> </p>
  //     </li>
  //     </li>
  //     <li> <strong>BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering</strong><br>
  //     Taolin Zhang, <strong>Dongyang Li</strong>, Qizhou Chen, Chengyu Wang, Xiaofeng He<br>
  //     <strong>ACL 2025 (CCF-A)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>PE: A Poincare Explanation Method for Fast Text Hierarchy Generation</strong><br>
  //     Qian Chen, <strong>Dongyang Li</strong>, Xiaofeng He, Hongzhao Li, Hongyu Yi<br>
  //     <strong>EMNLP 2024 (CCF-B)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>SE-Prompt: Exploring Semantic Enhancement with Prompt Tuning for Relation Extraction</strong><br>
  //     Cai Wang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
  //     <strong>ADMA 2023 (CCF-C)</strong> </p>
  //     </li>
  //     </li>
  //     <li> <strong>OnMKD: An Online Mutual Knowledge Distillation Framework for Passage Retrieval</strong><br>
  //     Jiali Deng, <strong>Dongyang Li</strong>, Taolin Zhang, Xiaofeng He<br>
  //     <strong>NLPCC 2023 (CCF-C)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>CIDR: A Cooperative Integrated Dynamic Refining Method for Minimal Feature Removal Problem</strong><br>
  //     Qian Chen, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
  //     <strong>AAAI 2024 (CCF-A)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>Knowledge-Enhanced Prototypical Network with Structural Semantics for Few-Shot Relation Classification</strong><br>
  //     Yanhu Li, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
  //     <strong>PAKDD 2023 (CCF-C)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>Lifelong Knowledge Editing for LLMs with Retrieval-Augmented Continuous Prompt Learning</strong><br>
  //     Qizhou Chen, Taolin Zhang, Xiaofeng He, <strong>Dongyang Li</strong>, Chengyu Wang, Longtao Huang, Hui Xue<br>
  //     <strong>EMNLP 2024 (CCF-B)</strong>
  //     </li>
      
  //   </ul>
  // </div>
  // `，
  //   }
  // ],
  type_one_items: [
    {
      title: `On the Role of Long-tail Knowledge in Retrieval Augmented Large Language Models`,
      abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
      date: "ACL 2024 (CCF-A)",
      writers: ["<strong>Dongyang Li</strong>", "Junbing Yan", "Taolin Zhang", "Chengyu Wang", "Xiaofeng He", "Longtao Huang", "Hui Xue", "Jun Huang"],
    },
    {
      title: `HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction`,
      abstract: `<strong>Dongyang Li</strong>, Taolin Zhang, Nan Hu, Chengyu Wang, Xiaofeng He<br>`,
      writers: ["ACL 2022 (CCF-A)"],
    },
    {
      title: `HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction`,
      abstract: `
      <div>
    <ul>
      <li> <strong>On the Role of Long-tail Knowledge in Retrieval Augmented Large Language Models</strong> <br>
      <strong>Dongyang Li</strong>, Junbing Yan, Taolin Zhang, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang<br>
      <strong>ACL 2024 (CCF-A)</strong>
      </li>
      <li> <strong>HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction</strong><br>
      <strong>Dongyang Li</strong>, Taolin Zhang, Nan Hu, Chengyu Wang, Xiaofeng He<br>
      <strong>ACL 2022 (CCF-A)</strong> 
      </li>
      <li> <strong>Mnemosyne: Accelerating Multi-Hop Question Answering via Cache Hit Order Fitting</strong><br>
      Haizhou Du, Jiujiu Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, Lisheng Wang<br>
      <strong>AAAI 2026 (CCF-A)</strong> 
      </li>
      <li> <strong>DCTR: Dual-Constraint Subgraph Optimization for Knowledge Graph-based Retrieval-Augmented Generation</strong><br>
      Yukun Cao, Zirui Xu, <strong>Dongyang Li<sup>✉</sup><strong>, Zhihao Guo, Luobin Huang, Lisheng Wang<br>
      <strong>AAAI 2026 (CCF-A)</strong> </p>
      </li>
      <li> <strong>KEHRL: Learning Knowledge-Enhanced Language Representations with Hierarchical Reinforcement Learning</strong><br>
      <strong>Dongyang Li</strong>, Taolin Zhang, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue
      <strong>COLING 2024 (CCF-B)</strong>
      </li>
      <li> <strong>UniPSDA: Unsupervised Pseudo Semantic Data Augmentation for Zero-Shot Cross-Lingual Natural Language Understanding</strong><br>
      <strong>Dongyang Li</strong>, Taolin Zhang, Jiali Deng, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue<br>
      <strong>COLING 2024 (CCF-B)</strong>
      </li>
      <li> <strong>MCFC: A Momentum-Driven Clicked Feature Compressed Pre-trained Language Model for Information Retrieval</strong><br>
      <strong>Dongyang Li</strong>, Ruixue Ding, Pengjun Xie, Xiaofeng He<br>
      <strong>NLPCC 2024 (CCF-C)</strong>
      </li>
      <li> <strong>GeoGLUE: A Chinese GeoGraphic Language Understanding Evaluation Benchmark</strong><br>
      <strong>Dongyang Li</strong>, Ruixue Ding, Qiang Zhang, Zheng Li, Boli Chen, Pengjun Xie, Yao Xu, Xin Li, Ning Guo, Fei Huang, Xiaofeng He<br>
      <strong>ADMA 2024 (CCF-C)</strong>
      </li>
      <li> <strong>DAFNet: Dynamic Auxiliary Fusion for Sequential Model Editing in Large Language Models</strong><br>
      Taolin Zhang, Qizhou Chen, <strong>Dongyang Li (Co-first author)</strong>, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang<br>
      <strong>ACL 2024 (CCF-A)</strong>
      </li>
      <li> <strong>R4: Reinforced Retriever-Reorder-Responder for   Retrieval-Augmented Large Language Models</strong><br>
      Taolin Zhang, <strong>Dongyang Li (Co-first author)</strong>, Qizhou Chen, Chengyu Wang, Longtao Huang, Hui Xue, Xiaofeng He, Jun Huang<br>
      <strong>ECAI 2024 (CCF-B)</strong>
      </li>
      <li> <strong>Text-Driven Hybrid Curriculum Learning for Multimodal Sentiment Analysis</strong><br>
      Feifei Xu, Puzhe Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, and Wenjing Zhu<br>
      <strong>MMM 2026 (CCF-C)</strong> <br>
      </li>
      <li> <strong>Question-Aware Spatial-Temporal Reasoning in Patch for Audio-Visual Question Answering</strong><br>
      Feifei Xu, Wenjing Zhu, <strong>Dongyang Li<sup>✉</sup><strong>, and Puzhe Li<br>
      <strong>MMM 2026 (CCF-C)</strong>
      </li>
      <li> <strong>LME-DETR: Lightweight and Multi-Scale Feature-Enhanced End-to-End Object Detection for Aerial Images</strong><br>
      Feifei Xu, Yu Xie, <strong>Dongyang Li<sup>✉</sup><strong>, luobin Huang, Zhihao Guo<br>
      <strong>MMM 2026</strong>
      </li>
      <li> <strong>CUOM: A Causal Unbiased Optimization Method for Federated Domain</strong><br>
      Mi Wen, Kang Han, <strong>Dongyang Li</strong>, QiYe Cai, HaiLun Shen<br>
      <strong>KBS (SCI Q1 journal)</strong> </p>
      </li>
      <li> <strong>Taming the Long Tail in Federated Learning: A Unified Global and Personalized Model Framework</strong><br>
      Pengsong Zhang, Mi Wen, Zhou Zhu, <strong>Dongyang Li</strong><br>
      <strong>Information Sciences (SCI Q2 journal)</strong> </p>
      </li>
      <li> <strong>BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering</strong><br>
      Taolin Zhang, <strong>Dongyang Li</strong>, Qizhou Chen, Chengyu Wang, Xiaofeng He<br>
      <strong>ACL 2025 (CCF-A)</strong>
      </li>
      <li> <strong>PE: A Poincare Explanation Method for Fast Text Hierarchy Generation</strong><br>
      Qian Chen, <strong>Dongyang Li</strong>, Xiaofeng He, Hongzhao Li, Hongyu Yi<br>
      <strong>EMNLP 2024 (CCF-B)</strong>
      </li>
      <li> <strong>SE-Prompt: Exploring Semantic Enhancement with Prompt Tuning for Relation Extraction</strong><br>
      Cai Wang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
      <strong>ADMA 2023 (CCF-C)</strong> </p>
      </li>
      <li> <strong>OnMKD: An Online Mutual Knowledge Distillation Framework for Passage Retrieval</strong><br>
      Jiali Deng, <strong>Dongyang Li</strong>, Taolin Zhang, Xiaofeng He<br>
      <strong>NLPCC 2023 (CCF-C)</strong>
      </li>
      <li> <strong>CIDR: A Cooperative Integrated Dynamic Refining Method for Minimal Feature Removal Problem</strong><br>
      Qian Chen, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
      <strong>AAAI 2024 (CCF-A)</strong>
      </li>
      <li> <strong>Knowledge-Enhanced Prototypical Network with Structural Semantics for Few-Shot Relation Classification</strong><br>
      Yanhu Li, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
      <strong>PAKDD 2023 (CCF-C)</strong>
      </li>
      <li> <strong>Lifelong Knowledge Editing for LLMs with Retrieval-Augmented Continuous Prompt Learning</strong><br>
      Qizhou Chen, Taolin Zhang, Xiaofeng He, <strong>Dongyang Li</strong>, Chengyu Wang, Longtao Huang, Hui Xue<br>
      <strong>EMNLP 2024 (CCF-B)</strong>
      </li>
      <ul>
      </div>
      `,
      writers: ["ACL 2022 (CCF-A)"],
    },
  ],
 

  // type_one_items: [
  //     {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: `sdfsd`,
  //     date: "2017",
  //     link: "sdf",
  //     github: "sdfsd",
  //     writers: [sdfsdf],
  //   },
  //   {
  //     title: `Conference Journal Papers`,
  //     abstract: `
  //   <div>
  //   <ul>
  //     <li> <strong>On the Role of Long-tail Knowledge in Retrieval Augmented Large Language Models</strong> <br>
  //     <strong>Dongyang Li</strong>, Junbing Yan, Taolin Zhang, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang<br>
  //     <strong>ACL 2024 (CCF-A)</strong>
  //     </li>
  //     <li> <strong>HiCLRE: A Hierarchical Contrastive Learning Framework for Distantly Supervised Relation Extraction</strong><br>
  //     <strong>Dongyang Li</strong>, Taolin Zhang, Nan Hu, Chengyu Wang, Xiaofeng He<br>
  //     <strong>ACL 2022 (CCF-A)</strong> 
  //     </li>
  //     <li> <strong>Mnemosyne: Accelerating Multi-Hop Question Answering via Cache Hit Order Fitting</strong><br>
  //     Haizhou Du, Jiujiu Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, Lisheng Wang<br>
  //     <strong>AAAI 2026 (CCF-A)</strong> 
  //     </li>
  //     </li>
  //     <li> <strong>DCTR: Dual-Constraint Subgraph Optimization for Knowledge Graph-based Retrieval-Augmented Generation</strong><br>
  //     Yukun Cao, Zirui Xu, <strong>Dongyang Li<sup>✉</sup><strong>, Zhihao Guo, Luobin Huang, Lisheng Wang<br>
  //     <strong>AAAI 2026 (CCF-A)</strong> </p>
  //     </li>
  //     </li>
  //     <li> <strong>KEHRL: Learning Knowledge-Enhanced Language Representations with Hierarchical Reinforcement Learning</strong><br>
  //     <strong>Dongyang Li</strong>, Taolin Zhang, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue
  //     <strong>COLING 2024 (CCF-B)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>UniPSDA: Unsupervised Pseudo Semantic Data Augmentation for Zero-Shot Cross-Lingual Natural Language Understanding</strong><br>
  //     <strong>Dongyang Li</strong>, Taolin Zhang, Jiali Deng, Longtao Huang, Chengyu Wang, Xiaofeng He, Hui Xue<br>
  //     <strong>COLING 2024 (CCF-B)</strong>
  //     </li>
  //     <li> <strong>MCFC: A Momentum-Driven Clicked Feature Compressed Pre-trained Language Model for Information Retrieval</strong><br>
  //     <strong>Dongyang Li</strong>, Ruixue Ding, Pengjun Xie, Xiaofeng He<br>
  //     <strong>NLPCC 2024 (CCF-C)</strong>
  //     </li>
  //     <li> <strong>GeoGLUE: A Chinese GeoGraphic Language Understanding Evaluation Benchmark</strong><br>
  //     <strong>Dongyang Li</strong>, Ruixue Ding, Qiang Zhang, Zheng Li, Boli Chen, Pengjun Xie, Yao Xu, Xin Li, Ning Guo, Fei Huang, Xiaofeng He<br>
  //     <strong>ADMA 2024 (CCF-C)</strong>
  //     </li>
  //     <li> <strong>DAFNet: Dynamic Auxiliary Fusion for Sequential Model Editing in Large Language Models</strong><br>
  //     Taolin Zhang, Qizhou Chen, <strong>Dongyang Li (Co-first author)</strong>, Chengyu Wang, Xiaofeng He, Longtao Huang, Hui Xue, Jun Huang<br>
  //     <strong>ACL 2024 (CCF-A)</strong>
  //     </li>
  //     <li> <strong>R4: Reinforced Retriever-Reorder-Responder for   Retrieval-Augmented Large Language Models</strong><br>
  //     Taolin Zhang, <strong>Dongyang Li (Co-first author)</strong>, Qizhou Chen, Chengyu Wang, Longtao Huang, Hui Xue, Xiaofeng He, Jun Huang<br>
  //     <strong>ECAI 2024 (CCF-B)</strong>
  //     </li>
  //     <li> <strong>Text-Driven Hybrid Curriculum Learning for Multimodal Sentiment Analysis</strong><br>
  //     Feifei Xu, Puzhe Li, <strong>Dongyang Li<sup>✉</sup><strong>, Luobin Huang, and Wenjing Zhu<br>
  //     <strong>MMM 2026 (CCF-C)</strong> <br>
  //     </li>
  //     <li> <strong>Question-Aware Spatial-Temporal Reasoning in Patch for Audio-Visual Question Answering</strong><br>
  //     Feifei Xu, Wenjing Zhu, <strong>Dongyang Li<sup>✉</sup><strong>, and Puzhe Li<br>
  //     <strong>MMM 2026 (CCF-C)</strong>
  //     </li>
  //     <li> <strong>LME-DETR: Lightweight and Multi-Scale Feature-Enhanced End-to-End Object Detection for Aerial Images</strong><br>
  //     Feifei Xu, Yu Xie, <strong>Dongyang Li<sup>✉</sup><strong>, luobin Huang, Zhihao Guo<br>
  //     <strong>MMM 2026</strong>
  //     </li>
  //     <li> <strong>CUOM: A Causal Unbiased Optimization Method for Federated Domain</strong><br>
  //     Mi Wen, Kang Han, <strong>Dongyang Li</strong>, QiYe Cai, HaiLun Shen<br>
  //     <strong>KBS (SCI Q1 journal)</strong> </p>
  //     </li>
  //     <li> <strong>Taming the Long Tail in Federated Learning: A Unified Global and Personalized Model Framework</strong><br>
  //     Pengsong Zhang, Mi Wen, Zhou Zhu, <strong>Dongyang Li</strong><br>
  //     <strong>Information Sciences (SCI Q2 journal)</strong> </p>
  //     </li>
  //     </li>
  //     <li> <strong>BELLE: A Bi-Level Multi-Agent Reasoning Framework for Multi-Hop Question Answering</strong><br>
  //     Taolin Zhang, <strong>Dongyang Li</strong>, Qizhou Chen, Chengyu Wang, Xiaofeng He<br>
  //     <strong>ACL 2025 (CCF-A)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>PE: A Poincare Explanation Method for Fast Text Hierarchy Generation</strong><br>
  //     Qian Chen, <strong>Dongyang Li</strong>, Xiaofeng He, Hongzhao Li, Hongyu Yi<br>
  //     <strong>EMNLP 2024 (CCF-B)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>SE-Prompt: Exploring Semantic Enhancement with Prompt Tuning for Relation Extraction</strong><br>
  //     Cai Wang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
  //     <strong>ADMA 2023 (CCF-C)</strong> </p>
  //     </li>
  //     </li>
  //     <li> <strong>OnMKD: An Online Mutual Knowledge Distillation Framework for Passage Retrieval</strong><br>
  //     Jiali Deng, <strong>Dongyang Li</strong>, Taolin Zhang, Xiaofeng He<br>
  //     <strong>NLPCC 2023 (CCF-C)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>CIDR: A Cooperative Integrated Dynamic Refining Method for Minimal Feature Removal Problem</strong><br>
  //     Qian Chen, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
  //     <strong>AAAI 2024 (CCF-A)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>Knowledge-Enhanced Prototypical Network with Structural Semantics for Few-Shot Relation Classification</strong><br>
  //     Yanhu Li, Taolin Zhang, <strong>Dongyang Li</strong>, Xiaofeng He<br>
  //     <strong>PAKDD 2023 (CCF-C)</strong>
  //     </li>
  //     </li>
  //     <li> <strong>Lifelong Knowledge Editing for LLMs with Retrieval-Augmented Continuous Prompt Learning</strong><br>
  //     Qizhou Chen, Taolin Zhang, Xiaofeng He, <strong>Dongyang Li</strong>, Chengyu Wang, Longtao Huang, Hui Xue<br>
  //     <strong>EMNLP 2024 (CCF-B)</strong>
  //     </li>
  //   </ul>
  //   </div>
  //     `,
  //     link: "https://scholar.google.com/citations?user=YKgKz5gAAAAJ&hl=zh-CN",
  //   },
  // ],

  type_two_title: `"Research Projects"`,
  type_two_items: [
    {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      date: "1996",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
    },
  ],

  // type_three_title: "Book Chapters",
  // type_three_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla"],
  //   },
  // ],

  // type_four_title: "",
  // type_four_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla"],
  //   },
  // ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research goal is to combine the three major sub-fields of the Computational Social Science, including Social Media Data Analysis, Network Analysis, and Agent-based Modeling, to study various social science problems. Below you can find a summary of my past and current projects.</p>
        <br />
        <h4 style="font-size: 1.1rem "> Identifying and Characterizing US Domestic Ideological Extremists </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
        <img src='../files/images/research.png' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat <br /> imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet <br /> lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "20 April 2022",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2", "achievement 3"],
    },
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2"],
    },
  ],
};
