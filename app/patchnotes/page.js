import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const PatchNotes = () => {
  return (
    <>
      <div className="flex-container-column gap-1rem padding-1rem">
        <h2 className="pn-title">Patch Notes</h2>
        <div className="centered-bordered-container-1000">
          <div className="pn-container">
            <div className="pn-version-date">
              <Link
                className="link hover-blue fw-semibold pn-version-number"
                href="https://store.steampowered.com/news/app/2126580/view/3678932376665208608?utm_source=levdevwebsite&utm_medium=web"
              >
                0.5.3
              </Link>
              <p className="pn-date">August 31, 2023</p>
            </div>
            <ul>
              <p className="fs-300">
                This update enables players to preview game modes while editing them, modifies some custom game modes
                options, and adjusts lighting for different scenarios.
              </p>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">Custom Game Modes</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Added a new window to the Custom Game Modes Menu: <b>Creator View</b>
                    </p>
                    <ul>
                      <p></p>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          The top half shows a preview of the currently selected game mode with all features you see
                          while playing (besides forward movement).
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>The bottom half contains carousel which shows one custom game mode category at a time.</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Make a change to any setting and quickly see the result by pressing the <i>Refresh Preview</i>{" "}
                          button.
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>Every target in the preview is damaged during its activation window if possible.</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          The old Custom Game Modes Menu is still available, and is now called <b>Property View</b>.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Changing default game modes and difficulties in the Default Game Mode Menu no longer changes the
                      Custom Game Mode options. It now requires pressing the <i>Customize Selected</i> button.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Combined the <b>Game Mode Name</b> and <b>Base Game Mode</b> combo boxes into{" "}
                      <b>Game Mode Template</b>.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Added new Spawning option: <b>Apply Velocity On Spawn</b>
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Added new General option: <b>Infinite Health</b>
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Replaced the <i>Save and Start</i> button with the <i>Start</i> button. It will still prompt you
                      asking if you wish to overwrite, but only if you&#39;ve made any changes to the custom game mode
                      you&#39;ve selected.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Replaced the <b>Lifetime Target Scaling Policy</b> option with the Target Activation Response:{" "}
                      <b>Apply Lifetime Target Scaling</b>.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Replaced the <b>Move Targets Forward</b> option with the Moving Target Direction Mode:{" "}
                      <b>Forward Only</b>.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Renamed the <b>Move Forward Distance</b> option to <b>Forward Spread</b>.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      The Target Activation/Deactivation Response: Change Direction is no longer explicitly required for
                      velocity changing to have an effect.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Target Activation Responses:</p>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Added: <b>Apply Consecutive Target Scale</b>, <b>Apply Lifetime Target Scaling</b>
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Removed: <b>Change Scale</b>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Target Deactivation Responses:</p>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Added: <b>Apply Deactivated Target Scale Multiplier</b>, <b>Reset Scale To Activated Scale</b>
                          , <b>Reset Position To Activated Position</b>
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>Renamed: </p>
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>
                              <b>Reset Position</b> is now <b>Reset Position To Spawned Position</b>.
                            </p>
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>
                              <b>Reset Scale</b> is now <b>Reset Scale To Spawned Scale</b>.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Moving Target Direction Mode:</p>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Horizontal Only now forces targets to only move horizontally after bounces.
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Vertical Only now forces targets to only move vertically after bounces.
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Alternate Horizontal Vertical now forces targets to only move horizontally or
                          vertically after bounces. Now alternates the starting direction between target spawns. Each
                          subsequent activation of a target will also alternate, starting from the direction they
                          spawned with.
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          A warning now appears if None is selected and any of the following options:
                        </p>
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>Apply Velocity On Spawn</p>
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>Target Activation Response: Change Velocity or Change Direction</p>
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>Target Deactivation Response: Change Velocity or Change Direction</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Target Distribution Policy:</p>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>A warning now appears if Headshot Height Only is selected and AI is enabled.</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          When Grid is selected, the following options are now set to read-only and their values
                          changed:
                        </p>
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>The Horizontal Spread and Vertical Spread are set to their max values.</p>
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>The Bounds Scaling Policy is set to Static.</p>
                          </li>
                          <li className="pn-dev-note">
                            <p className="pn-dev-note">
                              <i>
                                Since these settings have no effect on Grid, it makes sense to relay that information to
                                the player. However, Grid will likely support Bounds Scaling Policy in the future.
                              </i>
                            </p>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>When Grid is NOT selected, the following options are hidden:</p>
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faPlay} />
                            <p>Target Activation Selection Policy</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Updated many tooltips.</p>
                  </li>
                  <li className="pn-dev-note">
                    <p>
                      <i>
                        The goal with these changes is to give players more flexibility when changing the position,
                        velocity, and scale of targets at different points in their life cycle.
                      </i>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">FAQ</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Updated the Game Modes section.</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Added content to the Audio Analyzer section.</p>
                  </li>
                </ul>
              </li>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">Lighting</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      The spotlights on the ceiling have been replaced with a rectangular light provides better lighting
                      coverage when in night mode.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>A spotlight has been added that lights up the spawn area when in night mode.</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      The brightness when playing on low global illumination settings now better matches the brightness
                      when playing on other quality levels.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">Video Settings</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Fixed an issue where the resolution scale was showing infinite values.</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="centered-bordered-container-1000">
          <div className="pn-container">
            <div className="pn-version-date">
              <Link
                className="link hover-blue fw-semibold pn-version-number"
                href="https://store.steampowered.com/news/app/2126580/view/7132065582070409439?utm_source=levdevwebsite&utm_medium=web"
              >
                0.5.2
              </Link>
              <p className="pn-date">August 13, 2023</p>
            </div>
            <ul>
              <p className="fs-300">
                This update enables custom game mode sharing, adds visual hit timing feedback, and addresses some video
                settings bugs.
              </p>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">Custom Game Modes</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Custom game modes can now be imported and exported.</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Added new Target Deactivation Response: Hide Target</p>
                    <ul>
                      <p></p>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>Hides the target upon deactivation.</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>Useful for game modes that spawn all targets upfront.</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>
                          Still shows all spawned targets during countdown, but hides them once the game mode starts.
                        </p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>Example use: Hiding inactive targets during Beat-Grid.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">User Interface</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Added a hit timing overlay to the player HUD. It&#39;s enabled by default but can be turned off in
                      the game settings menu.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">Video Settings</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Fixed an issue where DLSS settings were not properly initializing for graphics cards not supported
                      by DLSS.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      Fixed an issue where DLSS Super Resolution Auto Mode was not correctly finding the optimal DLSS
                      settings.
                    </p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Improved DLSS Setting functionality.</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="centered-bordered-container-1000">
          <div className="pn-container">
            <div className="pn-version-date">
              <Link
                className="link hover-blue fw-semibold pn-version-number"
                href="https://store.steampowered.com/news/app/2126580/view/3671048540133749972?utm_source=levdevwebsite&utm_medium=web"
              >
                0.5.1
              </Link>
              <p className="pn-date">August 4, 2023</p>
            </div>
            <ul>
              <p className="fs-300">
                This is a small update, but it improves the gun viewmodel and animations, which is constantly in your
                field of view.
              </p>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">Animation</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>New gun animations for idling, strafing, and landing after jumping.</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Removed the jump start and falling gun animations. They felt unnecessary in my opinion.</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>
                      The old animations were relying on IK bone updates on tick using animations created for a
                      different weapon. You could tell the left hand on the handguard was not perfectly synced. The new
                      ones should look much cleaner since they&#39;re custom made for gun and require no IK bone
                      updates.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
                <p className="fs-300">User Interface</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>The audio file select window no longer requires breaking out of Fullscreen mode.</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatchNotes;
