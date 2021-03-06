import { kolobok, newYear } from '../src/homework/homework4';
import { expect } from '@jest/globals';

/**
 * В src/homework4.js напишите функцию "Колобок" и тесты к ней здесь.
 * Функция на вход принимает имя персонажа,
 * например, "дедушка", а в ответ возвращает, текстовую строку.
 * Значение текстовой строки - какой был результат взаимодействия Колобка с данным персонажем.
 * Например, "дедушка" - "Я от дедушки ушел".
 * В функции используйте конструкцию switch - https://learn.javascript.ru/switch
 */

 describe('колобок', () => {
    it('колобок ушел от дедушки', () => {
        expect(kolobok('дедушка')).toBe('Я от дедушки ушел');
    });

    it('колобок ушел от бабушки', () => {
        expect(kolobok('бабушка')).toBe('Я от бабушки ушел');
    });

    it('колобок убежал от волка', () => {
        expect(kolobok('волк')).toBe('И от тебя, волк, убегу');
    });
 });

/**
 * В src/homework4.js напишите функцию "Новый год" и тесты к ней здесь.
 * Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
 * Возвращает "Снегурочка! Снегурочка! Снегурочка!" или "Дед Мороз! Дед Мороз! Дед Мороз!
 * В функции используйте интерполяцию. https://learn.javascript.ru/es-string
 */

describe('новый год', () => {
    it('снегурочка', () => {
        expect(newYear('Снегурочка')).toBe('Снегурочка! Снегурочка! Снегурочка!');
    });

    it('дед мороз', () => {
        expect(newYear('Дед Мороз')).toBe('Дед Мороз! Дед Мороз! Дед Мороз!');
    });
});