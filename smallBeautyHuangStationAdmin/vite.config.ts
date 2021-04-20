import { UserConfigExport, ConfigEnv } from 'vite';
import convue from 'convue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import {
  base,
  primaryColor,
  textColor,
  defaultLocale,
  i18nUseCookie,
  mockServerProdEnable,
} from './src/config/constants';
import path from 'path';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    base,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': primaryColor,
            'text-color': textColor,
          },
        },
      },
    },
    plugins: [
      ...convue({
        head: {
          title: '美女小黄站后台管理',
        },
        loading: primaryColor,
        progress: {
          color: primaryColor,
        },
        page: {
          router: {
            history: 'hash',
            scrollBehavior: () => {
              return { x: 0, y: 0 };
            },
          },
        },
        locale: {
          defaultLocale,
          useCookie: i18nUseCookie,
        },
        styles: ['ant-design-vue/dist/antd.less', '@convue-lib/styles'],
        modules: ['ant-design-vue'],
      }),
      vueJsx(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && mockServerProdEnable,
        logger: true,
      }),
    ],
    build: {
      outDir: './docs',
    },
  };
};
