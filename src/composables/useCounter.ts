import { ref, Ref } from 'vue';

export default function useCounter(): {
  count: Ref<number>;
  increment: () => void;
} {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
  };
}
