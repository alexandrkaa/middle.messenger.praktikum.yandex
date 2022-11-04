export function range(
  start: number,
  end?: number,
  step?: number,
  fromRight: boolean = false
) {
  // TODO: добавить проверку на типы
  let _start = toFinite(start),
    _stop = end,
    _step = step;
  const result: number[] = [];

  if (_stop === undefined) {
    _stop = _start;
    _start = 0;
  } else {
    _stop = toFinite(_stop);
  }

  if (_step === undefined) {
    if (_start < _stop) {
      _step = 1;
    } else {
      _step = -1;
    }
  } else {
    _step = toFinite(_step);
  }

  let index = -1;
  let length = Math.max(
    Math.ceil(((_stop as number) - _start) / (_step || 1)),
    0
  );

  while (length--) {
    result[fromRight ? length : ++index] = _start;
    _start += _step;
  }
  return result;
}

function toFinite(value: number): number {
  if (!value) {
    return value === 0 ? value : 0;
  }
  return value === value ? value : 0;
}
