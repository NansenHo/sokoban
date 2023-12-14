import { computed, onMounted, onUnmounted } from "vue";
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

export function usePosition() {
  const STEP = 32;

  const { player } = usePlayerStore();

  const position = computed(() => {
    return {
      left: player.x * STEP + "px",
      top: player.y * STEP + "px",
    };
  });

  return {
    position,
  };
}
