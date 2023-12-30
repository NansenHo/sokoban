import { onMounted, onUnmounted } from "vue";
import { usePlayerStore } from "../../store/player";

export function useMove() {
  const {
    movePlayerToDown,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
  } = usePlayerStore();

  onMounted(() => {
    window.addEventListener("keyup", handleKeyup);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyup);
  });

  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowUp":
        movePlayerToUp();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
    }
  }
}
