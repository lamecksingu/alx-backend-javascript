export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const because task should not be re-assigned
  const task2 = true;  // Use const for task2 as well

  if (trueOrFalse) {
    // Use let inside the if block to avoid overwriting the outer variables
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
