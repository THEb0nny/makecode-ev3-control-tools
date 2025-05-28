namespace control {

    /**
     * Метод для ожидания завершения цикла в течение заданного времени.
     * @param startTime стартовое время, eg: 0
     * @param delay время ожидания, eg: 10
     */
    //% blockId="PauseUntilTime"
    //% block="starting from $startTime|ms wait for $delay|ms"
    //% block.loc.ru="начиная от $startTime|мс ждать $delay|мс"
    //% weight="6"
    export function pauseUntilTime(startTime: number, delay: number) {
        if (startTime == 0) startTime = control.millis();
        const waitCompletionTime = startTime + delay;
        while (control.millis() < waitCompletionTime) loops.pause(0.01);
    }

}