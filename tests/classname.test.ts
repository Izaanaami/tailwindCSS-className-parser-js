import Tailwind from '../src/index';
const config = require('./tailwind.config');
const { classname } = Tailwind(config);

  test('m-4', () => {
    expect(
      classname({
        property: 'margin',
        value: '1rem'
      })).toStrictEqual(
      {className: 'm-4'}
      
    );
  });

  test('md:w-48', () => {
    expect(
      classname({
        responsiveModifier: 'md',
        property: 'width',
        value: '12rem'
      })).toStrictEqual(
      { className: 'md:w-48' }
      
    );
  });

  test('text-sm', () => {
    expect(
      classname({
        property: 'font-size',
        value: '0.875rem'
      })).toStrictEqual(
      { className: 'text-sm' }
      
    );
  });

  test('md:hover:text-blue-600', () => {
    expect(
      classname({
        responsiveModifier: 'md',
        pseudoModifier: 'hover',
        property: 'color',
        value: '#2563eb'
      })).toStrictEqual(
      { className: 'md:hover:text-blue-600' }
      
    );
  });

  test('hover:bg-green-100', () => {
    expect(
      classname({
        pseudoModifier: 'hover',
        property: 'background-color',
        value: '#dcfce7'
      })).toStrictEqual(
      { className: 'hover:bg-green-100' }
      
    );
  });

  test('absolute', () => {
    expect(
      classname({
        property: 'position',
        value: 'absolute'
      })).toStrictEqual(
      { className: 'absolute' }
      
    );
  });

  test('font-serif', () => {
    expect(
      classname({
        property: 'font-family',
        value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
      })).toStrictEqual(
      { className: 'font-serif' }
      
    );
  });

  test('drop-shadow-md', () => {
    expect(
      classname({
        property: 'drop-shadow',
        value: '0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06)'
      })).toStrictEqual(
      { className: 'drop-shadow-md' }
      
    );
  });

  test('-m-64', () => {
    expect(
      classname({
        property: 'margin',
        value: '-16rem'
      })).toStrictEqual(
      { className: '-m-64' }
      
    );
  });

  test('block', () => {
    expect(
      classname({
        property: 'display',
        value: 'block'
      })).toStrictEqual(
      { className: 'block' }
      
    );
  });

  test('tracking-tighter', () => {
    expect(
      classname({
        property: 'letter-spacing',
        value: '-0.05em'
      })).toStrictEqual(
      { className: 'tracking-tighter' }
      
    );
  });

  // test('composite class', () => {
  //   expect(
  //     classname({
  //       property: 'composite',
  //       value: null,
  //       relatedProperties: {
  //         position: 'static',
  //         width: 'auto',
  //         height: 'auto',
  //         padding: '0',
  //         margin: '0',
  //         overflow: 'visible',
  //         clip: 'auto',
  //         whiteSpace: 'normal'
  //       }
  //     })).toStrictEqual(
  //     { className: 'sr-only' }
      
  //   );
  // });

  test('bg-red-200/50', () => {
    expect(
      classname({
        property: 'background-color',
        value: '#fecaca80'
      })).toStrictEqual(
      { className: 'bg-red-200/50' }
      
    );
  });

  test('bg-red-200/50 uppercase', () => {
    expect(
      classname({
        property: 'background-color',
        value: '#FECACA80'
      })).toStrictEqual(
      { className: 'bg-red-200/50' }
      
    );
  });

  test('unsupported color format', () => {
    expect(
      classname({
        property: 'background-color',
        value: 'rgb(255,255,255)'
      })).toStrictEqual(
      { error: { value: 'Only hex values are supported, example: #fecaca80' } }
      
    );
  });

  // todo: unhandled color shorthand/longhand
  test('bg-black/50 shortform', () => {
    expect(
      classname({
        property: 'background-color',
        value: '#0008'
      })).toStrictEqual(
      { className: 'bg-black/50' }
      
    );
  });

  // todo: black is stored as #000 in theme instead of full value :/
  test('bg-black', () => {
    expect(
      classname({
        property: 'background-color',
        value: '#000000'
      })).toStrictEqual(
      { className: 'bg-black' }
      
    );
  });

  // incorrect input
  test('incorrect responsive modifier', () => {
    expect(
      classname({
        responsiveModifier: 'small',
        property: 'background-color',
        value: '#dcfce7'
      })).toStrictEqual(
      {
        error: {
          responsiveModifier: 'Unidentified responsive modifier, expected one of [sm, md, lg, xl, 2xl], got small'
        }
      },
      
    );
  });

  test('incorrect pseudo modifier', () => {
    expect(
      classname({
        pseudoModifier: 'hovers',
        property: 'background-color',
        value: '#dcfce7'
      })).toStrictEqual(
      {
        error: {
          pseudoModifier:
            'Unidentified pseudo modifier, expected one of [first, last, odd, even, visited, checked, empty, read-only, group-hover, group-focus, focus-within, hover, focus, focus-visible, active, disabled], got hovers'
        }
      },
      
    );
  });

  test('incorrect property', () => {
    expect(
      classname({
        responsiveModifier: 'sm',

        property: 'font-sizes',
        value: '1.5rem'
      })).toStrictEqual(
      { error: { property: 'UNIDENTIFIED_PROPERTY' } },
      
    );
  });

  test('incorrect value', () => {
    expect(
      classname({
        responsiveModifier: 'sm',

        property: 'font-size',
        value: '1.5em' // should be rem
      })).toStrictEqual(
      { error: { value: 'UNIDENTIFIED_VALUE' } },
      
    );
  });
