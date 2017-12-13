import React, { Component } from 'react';

//modules
import { obtainInfoToLoad, loadZipWithInfo } from "./rkt_viewer_file_picker_grid_stats_actions";

export default class RktToolboxStageStats extends Component {

    constructor() {
        super();
        this.state = {

        };

        this.onClickLoadButton = this.onClickLoadButton.bind(this);
        this.onClickSettingsButton = this.onClickSettingsButton.bind(this);
    }

    renderLoadingProgressBar() {
        return (
            <div className="grid-block vertical shrink progress-bar-section" style={{ overflow: "hidden" }} >
                <progress className="loading-progress-bar"
                    value={this.props.loadedDicoms}
                    max={this.props.totalDicoms}>
                </progress>
            </div>
        )
    }

    renderFolderInfo() {
        return (
            <div className="grid-block shrink" style={{ overflow: "hidden", alignItems: "baseline" }} >
                <div className="grid-block shrink folder-info">
                    <h4>
                        <i className="fi-folder"></i>
                        <span>{" "}</span>
                        {this.props.title} {(this.props.totalDicoms > 0) && "(" + this.props.loadedDicoms + "/" + this.props.totalDicoms + ")"}
                    </h4>
                </div>
                {this.renderMenu()}
            </div>
        );
    }

    renderStats() {
        return (
            <div className="grid-block align-left stats">
                {Object.keys(this.props.items).map((key) => {
                    var name_stat_item = key;
                    var number_stat_item = this.props.items[name_stat_item]
                    return (
                        <div className="stat-item" index={key}>
                            <span className="name-stat-item">
                                {name_stat_item}
                            </span>
                            <span className="number-stat-item">
                                {number_stat_item}
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderMenu() {

        var grid_sources_info = this.props.grid_sources_info;
        var areImagesToLoad = false;
        var downloadButton;

        for (var i = 0; i < Object.keys(grid_sources_info).length; i++) {
            if (grid_sources_info[i].hasLabelAssigned === true) {
                areImagesToLoad = true;
                break;
            }

            if (areImagesToLoad) break;
        }

        if (areImagesToLoad) {
            downloadButton=<a onClick={this.onClickLoadButton}><i className="fi-download"></i></a>;
        }

        return (
            <div className="grid-block align-right menu">
                <a onClick={this.onClickSettingsButton}><i className="fi-widget"></i></a>
                {downloadButton}
            </div>
        )

    }

    onClickLoadButton() {
        loadZipWithInfo(this.props.grid_sources_info);
    }

    onClickSettingsButton(){
        this.props.onclicksettingsbutton();  
    }

    render() {

        return (
            <div className="grid-block vertical shrink container-stats">
                {this.renderLoadingProgressBar()}
                {this.renderFolderInfo()}
                {this.renderStats()}
            </div>
        );
    }
}