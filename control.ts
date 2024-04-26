namespace control {

    /**
     * A method to wait for the end of the cycle for a specified time.
     * Метод для ожидания завершения цикла в течение заданного времени.
     * @param startTime start time, eg: 0
     * @param delay waiting time, eg: 10
     */
    //% blockId="PauseUntilTime"
    //% block="starting from $startTime|ms wait for $delay|ms"
    //% block.loc.ru="начиная от $startTime|мс ждать $delay|мс"
    //% weight="6"
    export function pauseUntilTime(startTime: number, ms: number) {
        if (startTime == 0) startTime = control.millis();
        const waitCompletionTime = startTime + ms;
        while (control.millis() < waitCompletionTime) loops.pause(0.01);
    }

}