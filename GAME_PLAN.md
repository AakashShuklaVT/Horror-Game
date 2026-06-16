# Horror House Escape Plan (Granny-style)

This game has evolved from a simple maze into a tense, first-person horror escape game. The player must find items, solve puzzles, and avoid a terrifying AI enemy that roams the house.

## 1. Core Architecture & State Management
- **Global State**: Use `zustand` to manage inventory (keys, tools), player health, enemy state (patrol, chase), and game progress (doors unlocked).
- **Physics Engine**: Use `@react-three/rapier` for collision. Essential for blocking player movement through walls, managing dropped items, and interacting with the environment.
- **Perspective**: Strict **First-Person View** (`PointerLockControls`) for maximum immersion and horror.

## 2. Gameplay Mechanics
- **Escape Objective**: The main goal is to escape the house by unlocking the front door. This requires multiple steps (e.g., finding a padlock key, a hammer to break planks, and a security code).
- **The Enemy AI ("Granny")**:
  - Uses basic navmesh or grid pathfinding to roam the house.
  - Listens for noise (dropping items, running, creaky floorboards).
  - Switches to a "chase" state upon seeing or hearing the player.
- **Hiding Mechanics**: Player can crouch or interact with specific objects (closets, under beds) to become invisible to the AI.
- **Inventory System**: The player can only hold a limited number of items at a time, forcing them to drop things and remember where they left them.

## 3. Visuals & Horror Aesthetics
- **Lighting & Shadows**: 
  - The house is extremely dark. Use a spot light attached to the camera (Flashlight effect).
  - Use `ContactShadows` or baked lighting for the environment.
  - Flickering ambient lights in certain rooms to build tension.
- **Environment**: Grimy textures, decrepit furniture, narrow hallways.
- **Post-Processing**: `@react-three/postprocessing` is critical here:
  - **Vignette**: Darkens the edges of the screen.
  - **Noise/Film Grain**: Adds a dirty, VHS-style horror feel.
  - **Chromatic Aberration**: Use heavily when the enemy spots the player or gets close.

## 4. UI / UX Design
- **Minimalist HUD**: No health bars. Only show an interact prompt (e.g., "Press 'E' to Pick Up") when looking at a usable item.
- **Inventory Slot**: A simple, non-intrusive icon showing the currently held item.
- **Menus**: Eerie, dark main menu with subtle, unsettling background noises.

## 5. Audio Experience (Crucial for Horror)
- **Spatial Audio (`THREE.PositionalAudio`)**: The player must be able to hear where the enemy's footsteps are coming from.
- **Player Noise**: Footstep sounds change based on whether the player is walking, running, or crouching.
- **Jump Scares / Stingers**: Sudden loud, dissonant sounds when the enemy spots the player.
- **Ambient Noise**: Wind howling outside, house creaking, distant whispers.

## 6. Optimization
- **Culling**: Only render what the player's flashlight sees if possible, or use fog to hide distant objects.
- **Asset Management**: Load textures and audio lazily or use a loading screen so gameplay doesn't stutter when the monster appears.

---

## 🚀 Step-by-Step Execution Roadmap

### Phase 1: The Dark Foundation
- [ ] Set up `@react-three/rapier` physics.
- [ ] Implement First-Person Controller (`PointerLockControls`) with walking, running, and crouching.
- [ ] Set up the flashlight (SpotLight attached to the camera) and dark ambient lighting.

### Phase 2: The House & Interaction
- [ ] Build a static house layout (walls, doors, floors).
- [ ] Implement the Interaction System (Raycaster from camera center to pick up items, open doors).
- [ ] Implement the basic Inventory System with Zustand.

### Phase 3: The Threat (Enemy AI)
- [ ] Create a simple enemy model (a capsule or basic mesh to start).
- [ ] Implement patrol behavior and line-of-sight detection.
- [ ] Implement noise detection (player running creates "sound spheres" the enemy investigates).

### Phase 4: Puzzles & Polish
- [ ] Add the escape sequence logic (padlock, planks, code).
- [ ] Add hideables (closets/beds) and the hiding mechanic.
- [ ] Implement Post-Processing effects (Noise, Vignette) and Audio (Footsteps, Ambient horror).
