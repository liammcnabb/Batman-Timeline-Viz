import logger from './utils/logger';
import { spawn } from 'child_process';

// Use platform-correct npm executable and avoid shell so arguments stay intact
const NPM_CMD = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const SERIES = [
  { name: 'Amazing Spider-Man Vol 1', issues: '1-441' },
  { name: 'Amazing Spider-Man Annual Vol 1', issues: '1-28' },
  { name: 'Untold Tales of Spider-Man Vol 1', issues: '1-25' },
];

async function runCommand(
  command: string,
  args: string[]
): Promise<number> {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      stdio: 'inherit',
      shell: false,
    });

    proc.on('close', (code) => {
      resolve(code || 0);
    });

    proc.on('error', (err) => {
      reject(err);
    });
  });
}

async function runFullPipelineForAll() {
  logger.info('\n╔════════════════════════════════════════════╗');
  logger.info('║  RUNNING FULL PIPELINE FOR ALL SERIES     ║');
  logger.info('╚════════════════════════════════════════════╝\n');

  for (let i = 0; i < SERIES.length; i++) {
    const { name, issues } = SERIES[i];
    const isLast = i === SERIES.length - 1;

    logger.info(`\n${'='.repeat(50)}`);
    logger.info(
      `SERIES ${i + 1}/${SERIES.length}: ${name} (Issues ${issues})`
    );
    logger.info(`${'='.repeat(50)}\n`);

    try {
      const exitCode = await runCommand(NPM_CMD, [
        'run',
        'pipeline',
        '--',
        '--series',
        name,
        '--issues',
        issues,
      ]);

      if (exitCode !== 0) {
        logger.error(`\n❌ Pipeline failed for ${name} with exit code ${exitCode}`);
        process.exit(1);
      }

      logger.info(`✅ Completed: ${name}\n`);
    } catch (error) {
      logger.error(error, `\n❌ Error running pipeline for ${name}`);
      process.exit(1);
    }

    if (!isLast) {
      logger.info('Waiting before next series...');
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  logger.info(`\n${'='.repeat(50)}`);
  logger.info('╔════════════════════════════════════════════╗');
  logger.info('║  ✅ FULL PIPELINE COMPLETE!               ║');
  logger.info('║  All series have been scraped, processed,  ║');
  logger.info('║  merged, and published successfully!       ║');
  logger.info('╚════════════════════════════════════════════╝');
  logger.info(`${'='.repeat(50)}\n`);
}

runFullPipelineForAll().catch((error) => {
  logger.error('Fatal error:', error);
  process.exit(1);
});
