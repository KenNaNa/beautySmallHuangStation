import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
declare module '*.tsx';
declare module '*.ts';
declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }

  export interface MutationTree<S> {
    [key: string]: Mutation<S>;
  }
}

declare module '@convue-lib/phone';
declare module '@convue-lib/otp-input';
declare module '@convue-lib/otp-send';
declare module '@convue-lib/formatted';
declare module '@convue-lib/scroll';
declare module '@convue-lib/utils';
