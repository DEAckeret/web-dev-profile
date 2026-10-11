/* ===================================================================
   quick-questions.js
   "Quick questions about Dustin": a small chat-style helper in the
   bottom-right corner of every page.

   This is NOT AI. It matches keywords in the visitor's question to the
   pre-written answers below. The panel says so, so nobody is misled.

   To change what it says, edit the TOPICS list below:
   - "keywords" are the words that trigger a topic (lowercase).
   - "answer" is the reply. Each item in the list is one paragraph.
   - "links" are optional buttons shown under the answer.
   =================================================================== */

(function () {
  'use strict';

  var EMAIL = 'dustinackeret@gmail.com';

  var TOPICS = [
    {
      id: 'about',
      keywords: ['who', 'dustin', 'yourself', 'about', 'background', 'intro', 'introduce'],
      answer: [
        "I'm Dustin Ackeret, a front-end web developer and designer from Montana.",
        "I like taking a design file all the way to a responsive, interactive web page, and I'm the kind of person who sees a website and wonders \"how did they do that?!\""
      ],
      links: [{ label: 'About me page', href: 'about.html' }]
    },
    {
      id: 'projects',
      keywords: ['project', 'projects', 'work', 'portfolio', 'built', 'build', 'made', 'examples'],
      answer: [
        'Here are a few projects you can try live:',
        'Space Tourism: a multi-page responsive website. Dictionary App: looks up words using a public dictionary API. News Homepage: a responsive layout built with CSS Grid.',
        "Ask about any of them by name for more."
      ],
      links: [
        { label: 'Space Tourism', href: 'https://deackeret.github.io/Space-Tourism/' },
        { label: 'Dictionary App', href: 'https://deackeret.github.io/Dictionary-App-API/' },
        { label: 'News Homepage', href: 'https://deackeret.github.io/news-homepage/' }
      ]
    },
    {
      id: 'space',
      keywords: ['space', 'tourism', 'planet', 'planets'],
      answer: [
        'Space Tourism is a multi-page responsive website built from a design file, with pages for destinations, crew and technology.',
        'It was built with HTML, CSS and JavaScript.'
      ],
      links: [{ label: 'Open Space Tourism', href: 'https://deackeret.github.io/Space-Tourism/' }]
    },
    {
      id: 'dictionary',
      keywords: ['dictionary', 'api', 'definition', 'definitions', 'word', 'words'],
      answer: [
        'The Dictionary App lets you search for a word and pulls its definition from a public dictionary API.',
        'It was built with HTML, CSS and JavaScript.'
      ],
      links: [{ label: 'Open the Dictionary App', href: 'https://deackeret.github.io/Dictionary-App-API/' }]
    },
    {
      id: 'news',
      keywords: ['news', 'grid', 'homepage', 'layout'],
      answer: [
        'The News Homepage is a responsive layout that rearranges itself for phones, tablets and desktops using CSS Grid.'
      ],
      links: [{ label: 'Open the News Homepage', href: 'https://deackeret.github.io/news-homepage/' }]
    },
    {
      id: 'skills',
      keywords: ['skill', 'skills', 'tech', 'technology', 'technologies', 'stack', 'language', 'languages', 'code', 'coding',
        'html', 'css', 'javascript', 'js', 'react', 'bootstrap', 'jquery', 'sass', 'framework', 'frameworks', 'tools', 'use', 'know'],
      answer: [
        'For code: HTML, CSS and JavaScript, plus React, Bootstrap, jQuery and Sass.',
        'For design: Figma, Affinity, Procreate, Toonsquid and Blender. I\'m also experienced with Adobe Photoshop.'
      ]
    },
    {
      id: 'design',
      keywords: ['design', 'designer', 'designed', 'figma', 'photoshop', 'procreate', 'blender', 'toonsquid', 'ux', 'ui', 'site', 'website'],
      answer: [
        'I do design as well as development. This website is my own design, from layout and colors to the day and night versions of my portrait.',
        'My design tools are Figma, Affinity, Procreate, Toonsquid and Blender, and I\'m experienced with Adobe Photoshop.'
      ]
    },
    {
      id: 'hobbies',
      keywords: ['hobby', 'hobbies', 'fun', 'free', 'interests', 'outside', 'weekend', 'like', 'enjoy'],
      answer: [
        'I hike the mountains of Montana, make art and animation, and dabble in game development.',
        'I also love animals and gardening, and I have worked as a baker for many years.'
      ],
      links: [{ label: 'More on my About page', href: 'about.html' }]
    },
    {
      id: 'art',
      keywords: ['art', 'animation', 'animate', 'draw', 'drawing', 'artist', 'game', 'games', 'futurama', 'flappy'],
      answer: [
        "I love animation in particular and keep growing my art whenever I find the time.",
        "I've also been trying game development, including a Flappy Bird-style game with my own assets inspired by Futurama. You can see clips on my About page."
      ],
      links: [{ label: 'See my art and game clips', href: 'about.html' }]
    },
    {
      id: 'baking',
      keywords: ['bake', 'baker', 'baking', 'bread', 'breads', 'cheesecake', 'cheesecakes', 'food', 'cook', 'cooking'],
      answer: [
        "I've worked as a baker for many years: French breads, cheesecakes, parfaits, quiches and lots of vegan and gluten-free desserts.",
        'Nothing delights me more than putting care and skill into a recipe for others to enjoy.'
      ]
    },
    {
      id: 'location',
      keywords: ['where', 'location', 'located', 'live', 'montana', 'based', 'from'],
      answer: ['I live in my home state of Montana.']
    },
    {
      id: 'contact',
      keywords: ['contact', 'email', 'reach', 'hire', 'hiring', 'job', 'linkedin', 'github', 'instagram', 'message', 'talk', 'connect', 'resume'],
      answer: [
        'The best way to reach me is email: ' + EMAIL + '.',
        "You can also find me on LinkedIn, GitHub and Instagram."
      ],
      links: [
        { label: 'Email me', href: 'mailto:' + EMAIL },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dustin-ackeret/' },
        { label: 'GitHub', href: 'https://github.com/DEAckeret' },
        { label: 'Instagram', href: 'https://www.instagram.com/dustinackeret/' }
      ]
    },
    {
      id: 'hello',
      keywords: ['hi', 'hello', 'hey', 'howdy', 'yo', 'greetings'],
      answer: ['Hi there! Ask me about my projects, skills, hobbies, or how to get in touch.']
    },
    {
      id: 'thanks',
      keywords: ['thanks', 'thank', 'thx', 'cool', 'awesome', 'great', 'nice'],
      answer: ['Thanks for stopping by! Feel free to email me at ' + EMAIL + '.']
    }
  ];

  var FALLBACK = [
    "Sorry, I only have answers to a few common questions. Try one of the buttons below, or email me at " + EMAIL + " and I'll answer personally."
  ];

  var SUGGESTIONS = ['What have you built?', 'What tools do you use?', 'What do you do for fun?', 'How can I contact you?'];

  /* ---------------- Matching ---------------- */

  function findTopic(question) {
    var words = question.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter(Boolean);
    var best = null;
    var bestScore = 0;
    TOPICS.forEach(function (topic, index) {
      var score = 0;
      topic.keywords.forEach(function (keyword) {
        if (words.indexOf(keyword) !== -1) score += 1;
      });
      // Specific project names beat general words like "project"
      if (['space', 'dictionary', 'news'].indexOf(topic.id) !== -1 && score > 0) score += 1;
      // Greetings and thanks only win when nothing else matched
      if ((topic.id === 'hello' || topic.id === 'thanks') && score > 0) score = 0.5;
      if (score > bestScore) { best = topic; bestScore = score; }
    });
    return best;
  }

  /* ---------------- Building the widget ---------------- */

  function svgIcon(path, size) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('aria-hidden', 'true');
    var p = document.createElementNS(ns, 'path');
    p.setAttribute('d', path);
    svg.appendChild(p);
    return svg;
  }

  var ICON_CHAT = 'M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2';
  var ICON_CLOSE = 'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z';
  var ICON_SEND = 'M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z';

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function build() {
    var root = make('div', 'qq');

    var toggle = make('button', 'qq-toggle');
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'qq-panel');
    toggle.setAttribute('aria-label', 'Quick questions about Dustin');
    toggle.title = 'Quick questions about Dustin';
    toggle.appendChild(svgIcon(ICON_CHAT, 26));

    var panel = make('section', 'qq-panel');
    panel.id = 'qq-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Quick questions about Dustin');

    var header = make('div', 'qq-header');
    var titles = make('div');
    titles.appendChild(make('h2', 'qq-title', 'Quick questions'));
    titles.appendChild(make('div', 'qq-note', 'Pre-written answers, not AI'));
    var close = make('button', 'qq-close');
    close.type = 'button';
    close.setAttribute('aria-label', 'Close quick questions');
    close.appendChild(svgIcon(ICON_CLOSE, 16));
    header.appendChild(titles);
    header.appendChild(close);

    var log = make('div', 'qq-log');
    log.setAttribute('role', 'log');
    log.setAttribute('aria-live', 'polite');

    var chips = make('div', 'qq-chips');
    SUGGESTIONS.forEach(function (text) {
      var chip = make('button', 'qq-chip', text);
      chip.type = 'button';
      chip.addEventListener('click', function () { ask(text); });
      chips.appendChild(chip);
    });

    var form = make('form', 'qq-form');
    var input = make('input', 'qq-input');
    input.type = 'text';
    input.maxLength = 200;
    input.placeholder = 'Ask about projects, skills, hobbies…';
    input.setAttribute('aria-label', 'Your question');
    input.autocomplete = 'off';
    var send = make('button', 'qq-send');
    send.type = 'submit';
    send.setAttribute('aria-label', 'Send question');
    send.appendChild(svgIcon(ICON_SEND, 16));
    form.appendChild(input);
    form.appendChild(send);

    panel.appendChild(header);
    panel.appendChild(log);
    panel.appendChild(chips);
    panel.appendChild(form);
    root.appendChild(panel);
    root.appendChild(toggle);
    document.body.appendChild(root);

    function addMessage(who, paragraphs, links) {
      var bubble = make('div', 'qq-msg qq-msg-' + who);
      paragraphs.forEach(function (text) { bubble.appendChild(make('div', 'qq-para', text)); });
      if (links && links.length) {
        var row = make('div', 'qq-links');
        links.forEach(function (link) {
          var a = make('a', 'qq-link', link.label);
          a.href = link.href;
          if (/^https?:/.test(link.href)) { a.target = '_blank'; a.rel = 'noopener'; }
          row.appendChild(a);
        });
        bubble.appendChild(row);
      }
      log.appendChild(bubble);
      log.scrollTop = log.scrollHeight;
    }

    function ask(question) {
      question = question.trim();
      if (!question) return;
      addMessage('user', [question]);
      var topic = findTopic(question);
      if (topic) addMessage('bot', topic.answer, topic.links);
      else addMessage('bot', FALLBACK);
    }

    var greeted = false;
    function open() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      root.classList.add('qq-open');
      if (!greeted) {
        addMessage('bot', ["Hi, I'm Dustin! Pick a question below or type your own. These are answers I wrote ahead of time."]);
        greeted = true;
      }
      input.focus();
    }
    function shut() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      root.classList.remove('qq-open');
      toggle.focus();
    }

    toggle.addEventListener('click', function () { panel.hidden ? open() : shut(); });
    close.addEventListener('click', shut);
    panel.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      ask(input.value);
      input.value = '';
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
