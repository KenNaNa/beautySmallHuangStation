{
    /* <route>
    meta:
      layout: empty
      head:
        title: 美女小黄站 - 404
  </route> */
}
import { defineComponent, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        const navigateTo = getCurrentInstance()?.appContext.config.globalProperties.$navigateTo;

        return () => (
            <div class="pt-12">
                <a-result
                    status="404"
                    title="404"
                    sub-title={t('ErrorPage.404')}
                    v-slots={{
                        extra: () => (
                            <a-space>
                                <a-button onClick={() => navigateTo('/')}>{t('ErrorPage.BackHome')}</a-button>
                                <a-button type="primary" onClick={() => navigateTo()}>
                                    {t('ErrorPage.ReturnPrevious')}
                                </a-button>
                            </a-space>
                        ),
                    }}
                ></a-result>
            </div>
        );
    },
});
