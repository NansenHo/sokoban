import { onMounted, onUnmounted } from "vue";
import { usePlayerStore } from "../../store/player";
import { useGameStore } from "../../store/game";

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

  const { detectionGameCompleted } = useGameStore();

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

    detectionGameCompleted();
  }
}
