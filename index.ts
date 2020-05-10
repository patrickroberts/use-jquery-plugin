import jQuery from 'jquery';
import React, { useCallback, useRef, useLayoutEffect } from 'react';

type JQueryCallback<TElement = HTMLElement> = (
  $element: JQuery<TElement>
) => ReturnType<React.EffectCallback>;

export default function useJQueryPlugin<TElement = HTMLElement>(
  effect: JQueryCallback<TElement>,
  deps: React.DependencyList | undefined = [effect]
): React.RefObject<TElement> {
  const plugin = useCallback(effect, deps);
  const elementRef = useRef<TElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    if (element !== null) {
      const $element = jQuery(element);
      return plugin($element);
    }
  }, [plugin, elementRef]);

  return elementRef;
}
