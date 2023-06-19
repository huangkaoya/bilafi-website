import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children:
      'https://raw.githubusercontent.com/huangkaoya/bxy/master/BILAFI.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: (
            <span>
              <p>BILAFI LIMITED</p>
            </span>
          ),
        },
        content: {
          className: 'banner2-content',
          children: (
            <span>
              <p>A newly established one-stop wealth management specialist.</p>
            </span>
          ),
        },
        button: { className: 'banner2-button', children: 'Learn More' },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <span>
            <p>Wealth Mindset Club（添财思维）</p>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          In China, we offer tailored secondary jobs, investment opportunities,
          and consulting solutions specifically designed for a large number of
          middle-class individuals, using mature SAAS tools such as WeChat and
          Knowledge Planet to achieve vertical community landing.
        </p>
      </span>
    ),
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: (
            <span>
              <p>BILAFI LIMITED</p>
            </span>
          ),
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          A newly established one-stop wealth management
                          specialist.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>contact@bilafi.ltd</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>PRODUCT</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <span>
                    <span>
                      <p>添财思维（WMC）</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>Layer2 RADAR</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>DOGE LINK</p>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>EXDOGE</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <p>ABOUT</p>
                </span>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Contact Us</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>LINKS</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>Guance.com</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Cypto WIKI</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2023 by BILAFI LIMITED&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
