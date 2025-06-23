import type { DevToolsPanelTabType } from '../devtools-panel'
import type { Corners } from '../../../shared'

import { SettingsTab } from './settings-tab'
import { SegmentsExplorerTab } from './segments-explorer-tab'

export function DevToolsPanelTab({
  activeTab,
  devToolsPosition,
  scale,
  routerType,
  handlePositionChange,
  handleScaleChange,
}: {
  activeTab: DevToolsPanelTabType
  devToolsPosition: Corners
  routerType: 'app' | 'pages'
  scale: number
  handlePositionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleScaleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  switch (activeTab) {
    case 'settings':
      return (
        <SettingsTab
          devToolsPosition={devToolsPosition}
          scale={scale}
          handlePositionChange={handlePositionChange}
          handleScaleChange={handleScaleChange}
        />
      )
    case 'route':
      return <SegmentsExplorerTab routerType={routerType} />
    case 'issues':
      return <div>Issues</div>
    default:
      return null
  }
}
