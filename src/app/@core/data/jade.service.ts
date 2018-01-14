import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';
import { Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subscriber} from 'rxjs/Rx';
import * as TAFFY from 'taffy';

@Injectable()
export class JadeService {
  private baseUrl: string = 'http://localhost:8081';
  private websockUrl: string = 'ws://localhost:8083';

  // sockets
  // private websock: WebsocketService;
  private websock: $WebSocket;

  // databases
  private db_agent_agents = TAFFY();

  private db_core_channels = TAFFY();
  private db_core_systems = TAFFY();

  private db_ob_campaigns = TAFFY();
  private db_ob_destinations = TAFFY();
  private db_ob_dialings = TAFFY();
  private db_ob_dlmas = TAFFY();
  private db_ob_dls = TAFFY();
  private db_ob_plans = TAFFY();

  private db_park_parkinglots = TAFFY();
  private db_park_parkedcalls = TAFFY();

  private db_pjsip_aors = TAFFY();
  private db_pjsip_auths = TAFFY();
  private db_pjsip_contacts = TAFFY();
  private db_pjsip_endpoints = TAFFY();
  private db_pjsip_transports = TAFFY();

  private db_queue_entries = TAFFY();
  private db_queue_members = TAFFY();
  private db_queue_queues = TAFFY();

  private db_vm_users = TAFFY();
  private db_vm_messages = TAFFY();
  private db_vm_settings = TAFFY();

  private targets = [
    ['/agent/agents', this.db_agent_agents],

    ['/core/channels', this.db_core_channels],
    ['/core/systems', this.db_core_systems],

    ['/ob/campaigns', this.db_ob_campaigns],
    ['/ob/destinations', this.db_ob_destinations],
    ['/ob/dialings', this.db_ob_dialings],
    ['/ob/dlmas', this.db_ob_dlmas],
    ['/ob/dls', this.db_ob_dls],
    ['/ob/plans', this.db_ob_plans],

    ['/park/parkinglots', this.db_park_parkinglots],
    ['/park/parkedcalls', this.db_park_parkedcalls],

    ['/pjsip/aors', this.db_pjsip_aors],
    ['/pjsip/auths', this.db_pjsip_auths],
    ['/pjsip/contacts', this.db_pjsip_contacts],
    ['/pjsip/endpoints', this.db_pjsip_endpoints],
    ['/pjsip/transports', this.db_pjsip_transports],

    ['/queue/entries', this.db_queue_entries],
    ['/queue/members', this.db_queue_members],
    ['/queue/queues', this.db_queue_queues],

    ['/voicemail/users', this.db_vm_users],
    ['/voicemail/vms', this.db_vm_messages],
    ['/voicemail/settings', this.db_vm_settings],
  ];


  constructor(private http: Http) {
    console.log('Fired JadeService constructor.');

    this.init_database();
    this.init_websock();
  }

  init_database() {
    for (let i = 0; i < this.targets.length; i++) {
      const target = this.targets[i];
      console.log('Initiating target. ' + target[0]);

      // get data
      this.http.get(this.baseUrl + target[0]).map(res => res.json())
      .subscribe(
        (data) => {
          const list = data.result.list;
          for (let j = 0; j < list.length; j++) {
            target[1].insert(list[j]);
          }
        },
        (err) => {
          console.log('Could not get data. url: ' + target[0] + ' ' + err);
        },
      );
    }
  }

  init_websock() {
    console.log('Fired init_websock.');

    this.websock = new $WebSocket(this.websockUrl);
    this.websock.setSend4Mode(WebSocketSendMode.Direct);
    this.websock.send('{"type":"subscribe", "topic":"/"}');

    // set received message callback
    this.websock.onMessage(
      (msg: MessageEvent) => {
          console.log('onMessage ', msg.data);

          // get message
          // {"<topic>": {"<message_name>": {...}}}
          const j_data = JSON.parse(msg.data);
          const topic = Object.keys(j_data)[0];
          const j_msg = j_data[topic];

          // message parse
          this.message_handler(j_msg);

          // console.log('Received topic. topic ', topic);
      },
      {autoApply: false},
    );
  }

  get_core_system() {
    return this.db_core_systems;
  }

  get_core_channels() {
    return this.db_core_channels;
  }

  get_agent_agents() {
    return this.db_agent_agents;
  }

  get_queue_entries() {
    return this.db_queue_entries;
  }


  OnInit() {
    console.log('OnInit!!');
    console.log('BaseUrl: ' + this.baseUrl);
  }

  message_handler(j_data) {
    console.log(event);

    const type = Object.keys(j_data)[0];
    const j_msg = j_data[type];

    if (type === 'core.channel.create') {
      this.db_core_channels.insert(j_msg);
    }
    else if (type === 'core.channel.update') {
      this.db_core_channels({unique_id: j_msg['unique_id']}).update(j_msg);
    }
    else if (type === 'core.channel.delete') {
      this.db_core_channels({unique_id: j_msg['unique_id']}).remove();
    }
    else if (type === 'queue.entry.create') {
      this.db_queue_entries.insert(j_msg);
    }
    else if (type === 'queue.entry.update') {
      this.db_queue_entries({unique_id: j_msg['unique_id']}).update(j_msg);
    }
    else if (type === 'queue.entry.delete') {
      this.db_queue_entries({unique_id: j_msg['unique_id']}).remove();
    }

  }


  delete_item(target) {
    // delete data
    this.http.delete(this.baseUrl + target).map(res => res.json())
    .subscribe(
      (data) => {
        return true;
      },
      (err) => {
        console.log('Error. ' + err);
        return false;
      },
    );
  }

  delete_channel(id) {
    return this.delete_item('/core/channels/' + id);
  }

  delete_agent(id) {
    return this.delete_item('/agent/agents/' + id);
  }

}
