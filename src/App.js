import './App.css';

import { Button, createStyles, MantineProvider, useMantineTheme, Box, Paper } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.other.colorPrimary,
    '&&:hover': {
      backgroundColor: `${theme.colors.yellow[8]}`,
    }
  }
}));

function App() {
  const { classes } = useStyles();
  const th = useMantineTheme();
  return (
    <section className="mx-auto w-full max-w-screen-xl pt-10 px-3">
      <h1 className="text-xl font-bold mb-5">Brand colors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-primary-color" />
          <div className="p-3">
            <p className="font-bold">#FA5A00</p>
            <p>u-primary-color</p>
          </div>
        </div>
        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-secondary-color" />
          <div className="p-3">
            <p className="font-bold">#F2F2F2</p>
            <p>u-secondary-color</p>
          </div>
        </div>

        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-tertiary-color" />
          <div className="p-3">
            <p className="font-bold">#242131</p>
            <p>u-tertiary-color</p>
          </div>
        </div>

        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-active-color" />
          <div className="p-3">
            <p className="font-bold">#1154FF</p>
            <p>u-active-color</p>
          </div>
        </div>

        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-brand-color" />
          <div className="p-3">
            <p className="font-bold">#44C1DC</p>
            <p>u-brand-color</p>
          </div>
        </div>

        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-primary-border-color" />
          <div className="p-3">
            <p className="font-bold">#A03B01</p>
            <p>u-primary-border-color</p>
          </div>
        </div>

        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-secondary-border-color" />
          <div className="p-3">
            <p className="font-bold">#627793</p>
            <p>u-secondary-border-color</p>
          </div>
        </div>

        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-tertiary-border-color" />
          <div className="p-3">
            <p className="font-bold">#242131</p>
            <p>u-tertiary-border-color</p>
          </div>
        </div>
        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-disabled-color" />
          <div className="p-3">
            <p className="font-bold">#C5C5C5</p>
            <p>u-disabled-color</p>
          </div>
        </div>
        <div className="rounded shadow overflow-hidden">
          <div className="h-20 bg-brand-u-brand-error" />
          <div className="p-3">
            <p className="font-bold">#B72929</p>
            <p>u-brand-error</p>
          </div>
        </div>
      </div>
      <div>
        <Button>
          Settings
        </Button>
        <Box sx={(theme) => ({
          padding: theme.spacing.md
        })}>
          <Button sx={(theme) => ({
            color: '#ffffff',
            border: 0,
            backgroundColor: theme.other.colorPrimary,
            '&&:hover': {
              backgroundColor: `${theme.colors.yellow[8]}`,
            }

          })} >SX</Button>
        </Box>
        {/* // Si queremos customizar componentes de mantine se recomienda usar styles o classnames */}
        <Box sx={(theme) => ({
          padding: theme.spacing.md
        })}>
          <Button classNames={{ root: classes.button }}>createStyle</Button>
        </Box>
        <Box sx={(theme) => ({
          padding: theme.spacing.md
        })}>
          <Button styles={{
            root: {
              backgroundColor: th.other.colorPrimary,
              '&&:hover': {
                backgroundColor: `${th.colors.yellow[8]}`,
              }
            }
          }}>styles</Button>
        </Box>
        {/* // Tambien se puede customizar un componente de mantine con el style provider */}
        <Paper sx={(theme) => ({
          padding: theme.spacing.md
        })}>
          <MantineProvider
            theme={th}
            styles={{
              Button: (theme) => ({
                root: {
                  backgroundColor: theme.other.colorPrimary,
                  '&&:hover': {
                    backgroundColor: `${theme.colors.yellow[8]}`,
                  }
                }
              })
            }}>
            <Button>Style provider</Button>
          </MantineProvider>
        </Paper >
      </div>
    </section>
  );
}

export default App;
