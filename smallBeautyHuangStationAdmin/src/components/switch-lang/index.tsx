import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { TranslationOutlined } from '@ant-design/icons-vue';
import { langArr } from '../../config/constants';
export default defineComponent({
    setup() {
        let { locale, t } = useI18n();

        console.log("locale======>", locale)
        const selectedKeys = computed(() => [locale.value]);
        const onSelectChange = ({ key }: any) => {
            locale.value = key;
        };
        return () => (
            <a-dropdown
                trigger={['hover']}
                placement="bottomRight"
                v-slots={{
                    overlay: () => (
                        <a-menu
                            slot="overlay"
                            selectable
                            selected-keys={selectedKeys.value}
                            onSelect={onSelectChange}
                        >
                            {
                                langArr.map(item => {
                                    return <a-menu-item key={item.key}>{t(item.value)}</a-menu-item>
                                })
                            }
                            {/* <a-menu-item key="zh-CN">{t('Chinese')}</a-menu-item>
                            <a-menu-item key="en-US">{t('English')}</a-menu-item> */}
                        </a-menu>
                    ),
                }}
            >
                <div>
                    <TranslationOutlined style={{ fontSize: '16px' }} />
                </div>
            </a-dropdown>
        );
    },
});
